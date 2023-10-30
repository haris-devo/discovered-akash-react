import { WavesOutlined } from "@mui/icons-material";
import SignUp from "./SignUp";
import { useState } from "react";

const SignIn = () => {
  const [showSignUp, setShowSignUp] = useState(false); // add state to toggle between SignIn and SignUp

  return (
    <>
      {!showSignUp ? ( // render SignIn component if showSignUp is false
        <div
          className="w-full h-full max-w-md p-8 space-y-3 "
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="text-2xl font-bold text-center text-blue-200">
            Login
          </h1>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center space-x-2">
              <WavesOutlined />
            </div>
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-black py-2">
                Login to your personal profile
              </h1>
              <p className="text-xs text-gray-600 mb-3">
                Log in to your account to view your orders, saved posters, and
                favorite templates.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-xs text-black mb-3 text-center">
                Register using
              </p>
              <div className="flex space-x-4 justify-center">
                <WavesOutlined />
                <WavesOutlined />
              </div>
              <p
                className="text-xs text-black my-3 text-center cursor-pointer"
                onClick={() => setShowSignUp(true)} // toggle showSignUp state on click
              >
                or use your email to login
              </p>
            </div>
          </div>
          <form noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm">
              <label htmlFor="username" className="block text-gray-400">
                Username
              </label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                className="w-full px-4 py-3 rounded-md border border-gray-700  text-gray-100 focus:border-violet-400"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block text-gray-400">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 rounded-md border border-gray-700  text-gray-100 focus:border-violet-400"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="flex justify-end text-xs text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button className="block w-full p-3 text-center rounded-sm text-gray-900 bg-violet-400">
              Sign in
            </button>
          </form>
          <p className=" text-center sm:px-6 text-gray-400">
            Don&apos;t have an account?
            <button
              className=" text-blue-600 underline cursor-pointer"
              onClick={() => setShowSignUp(true)} // toggle showSignUp state on click
            >
              {" "}
              Register
            </button>
          </p>
        </div>
      ) : (
        // render SignUp component if showSignUp is true
        <SignUp setShowSignUp={setShowSignUp} />
      )}
    </>
  );
};

export default SignIn;
