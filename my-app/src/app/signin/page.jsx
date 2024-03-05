'use client'
import { Icon } from "@iconify/react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoading(false);
  };

  return (
    <div>
      <div className="main_login_container sm:w-[60%] max-[400px]:w-[80%] max-[400px]:ml-[3.3em] min-[400px]:max-[640px]:w-[70%] h-[90vh] flex items-center justify-center m-auto text-[.8em] sm:text-[1em]">
        
      <div className="create_account py-5 max-md:py-4 px-7 w-[90%] sm:px-9 md:px-10 lg:px-16 flex flex-col bg-white sm:ml-0 h-[80vh] md:h-[81vh] xl:h-[70vh] rounded-3xl relative shadow-xl right-5">
         <h1 className="md:text-xl lg:text-2xl text-gray-600 font-bold">
            Sign In
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border-b-2 w-full p-2 px-2 mt-3 focus:border-b-2 focus:border-b-violet-600 outline-none"
              id="email"
              label="Email Address"
              autoComplete="email"
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <div className="password flex justify-between items-center border-b-2 w-full p-2 px-2 mt-3 focus:border-b-2 focus:border-b-violet-600">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="  outline-none"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
              {showPassword ? (
                <AiFillEye
                  className="text-xl hover:cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              ) : (
                <AiFillEyeInvisible
                  className="text-xl hover:cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                />
              )}
            </div>

            <button
              type="submit"
              className="w-full flex justify-center items-center bg-violet-800 text-white p-2 rounded-full mt-2"
            >
              {loading ? (
                <div className="w-full flex justify-center h-6 items-center">
                  Loading...
                </div>
              ) : (
                <>
                  <span>Sign In</span>
                </>
              )}
            </button>
          </form>
          <h2 className="text-center py-3 text-sm">
           
            <a
              href="/forgotpassword"
              className="text-sm text-violet-700 cursor-pointer hover:underline"
            > 
            Forgot password?
            </a>
          </h2>
          <h2 className="text-center py-3 text-sm">
            Don't have an account?{" "}
            <a
              href="/newsignup"
              className="text-sm text-violet-700 cursor-pointer hover:underline"
            >
              Sign Up
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
