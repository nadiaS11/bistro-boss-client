import React from "react";
import PropTypes from "prop-types";
import SectionHeading from "./../../components/SectionHeading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "./dashboard components/Checkout";
import CheckoutForm from "./dashboard components/Checkout";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const Payments = () => {
  return (
    <div>
      <SectionHeading
        heading={"Proceed to pay"}
        subheading={"Payment"}
      ></SectionHeading>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

Payments.propTypes = {};

export default Payments;
