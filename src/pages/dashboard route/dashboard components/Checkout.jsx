import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxios from "../../../hooks/useAxios";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";

const CheckoutForm = (props) => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transId, setTransId] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxios();
  const [cart] = useCart();
  const { user } = useAuth();
  const price = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error: ", error);
      setError(error.message);
    } else {
      console.log("payment method: ", paymentMethod);
      setError("");
    }
    //confirm card payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError, "inside confirm card payment");
    } else {
      console.log("payment intent ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id", paymentIntent.id);
        setTransId(paymentIntent.id);

        const payment = {
          transactionId: paymentIntent.id,
          email: user?.email,
          price: price,
          date: new Date(), //use moment for utc date format
          cartIds: cart.map((item) => item._id),
          cartItems: [...cart],
          status: "pending",
        };
        const res = await axiosSecure.post("/payments", payment);
        console.log(res.data, "payment saved");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        className="input input-bordered w-[80%] "
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        className="btn btn-wide btn-error mt-5"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500 font-semibold">{error}</p>
      {transId && (
        <p className="text-green-500 font-semibold">
          Transaction id: {transId}
        </p>
      )}
    </form>
  );
};

CheckoutForm.propTypes = {};

export default CheckoutForm;
