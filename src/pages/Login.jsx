import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import useAuth from "../hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useAuth();
  const captchaRef = useRef();
  const [disable, setDisable] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    try {
      const user = await login(email, password);
      console.log(user);
      navigate(location?.state ? location.state : "/");
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value, false)) {
      setDisable(false);
      console.log("captcha okay");
    } else {
      setDisable(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold my-5">Login</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form
                onSubmit={handleLogin}
                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
              >
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative">
                  <input
                    autoComplete="off"
                    id="password"
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Password"
                  />
                  <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Password
                  </label>
                </div>
                <div className="relative  ">
                  <LoadCanvasTemplate />
                  <input
                    ref={captchaRef}
                    onChange={handleValidateCaptcha}
                    id="captcha"
                    name="captcha"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="type the text above"
                  />
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    disabled={disable}
                    className="btn bg-blue-500 text-white rounded-md px-2 py-1"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>{" "}
            <Link to={"/signup"}>Create new account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Login.propTypes = {};

export default Login;
