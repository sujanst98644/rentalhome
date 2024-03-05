'use client'
import { Icon } from "@iconify/react";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const NewSignUp = () => {
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [data, setdata] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    username: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    console.log(
      "email",
      data.email,
      "firstName",
      `${data.firstName} ${data.lastName}`,
      "pw",
      data.password,
      "username",
      data.username
    );
    const response = await addData("users/register", {
      email: data.email,
      name: `${data.firstName} ${data.lastName}`,
      password: data.password,
      username: data.username,
    });
    if (response.success) {
      successToast(response.message);
      navigate(
        '/verify', {
          state: {
            email: data.email,
            username: data.username,
          }
        }
      )
      setshowSignup(false);
    } else {
      errorToast(response.message);
    }
    setloading(false);
  };
  const VerificationHandler = async () => {
    let str = "";
    Object.keys(verifyNumber).map((key) => {
      str = str + verifyNumber[key];
    });
    if (str.length != 4) {
      setinvalidError(true);
      errorToast("enter the valid otp");
      return;
    }
    const response = await addData("activate-user", {
      activation_Token,
      activation_Code: str,
    });
    if (response.success) {
      navigate("/signin");
      successToast(response.message);
    } else {
      errorToast(response.message);
      setinvalidError(true);
    }
    setloading(false);
  };
  const handlerInputChange = (index, value) => {
    setinvalidError(false);
    setloading(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setverifyNumber(newVerifyNumber);
    if (value === "" && index > 0) {
      inputRefs[index - 1].current.focus();
    } else if (value.length === 1 && index < 3) {
      inputRefs[index + 1].current.focus();
    }
  };
  return (
    <div>
      <div className="main_login_container sm:w-[60%] max-[400px]:w-[80%] max-[400px]:ml-[3.3em] min-[400px]:max-[640px]:w-[70%] h-[90vh] flex items-center justify-center m-auto text-[.8em] sm:text-[1em]">
        
        <div className="create_account py-5 max-md:py-4 px-7 w-[100%] sm:px-9 md:px-10 lg:px-16 flex flex-col bg-white sm:ml-0 h-[80vh] md:h-[81vh] xl:h-[70vh] rounded-3xl relative shadow-xl right-5">
          <h1 className="md:text-xl lg:text-2xl text-gray-600 font-bold">
            Create Account
          </h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Full Name"
              className="border-b-2  md:text-[1em] w-full p-2 mt-1 md:mt-3 focus:border-b-2 focus:border-b-violet-600 outline-none"
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={(e) => setdata({ ...data, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="border-b-2 w-full p-2 px-2 mt-3 focus:border-b-2 focus:border-b-violet-600 outline-none"
              id="username"
              autoComplete="username"
              onChange={(e) => setdata({ ...data, username: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="border-b-2 w-full p-2 px-2 mt-3 focus:border-b-2 focus:border-b-violet-600 outline-none"
              id="email"
              label="Email Address"
              autoComplete="email"
              onChange={(e) => setdata({ ...data, email: e.target.value })}
            />
            <div className="password flex justify-between items-center border-b-2 w-full p-2 px-2 mt-3 focus:border-b-2 focus:border-b-violet-600">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="  outline-none"
                id="password"
                autoComplete="new-password"
                onChange={(e) => setdata({ ...data, password: e.target.value })}
              />
              {showPassword ? (
                <AiFillEye
                  className="text-xl hover:cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              ) : (
                <AiFillEyeInvisible
                  className="text-xl hover:cursor-pointer"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                />
              )}
            </div>

            <div className="options flex gap-2 items-center py-2">
              <input 
                type="radio" 
                name="options" 
                value="lookingForRoom" 
                checked={selectedOption === "lookingForRoom"} 
                onChange={() => setSelectedOption("lookingForRoom")}
              />
              <label htmlFor="lookingForRoom">Looking for room</label>
              
              <input 
                type="radio" 
                name="options" 
                value="rentYourRoom" 
                checked={selectedOption === "rentYourRoom"} 
                onChange={() => setSelectedOption("rentYourRoom")}
              />
              <label htmlFor="rentYourRoom">Rent your room</label>
            </div>

            <div className="check_box flex gap-2 items-center py-2">
              <input type="checkbox" className="" />
              <p className="text-gray-500">
                I agree to the company{" "}
                <span className="text-violet-600 cursor-pointer hover:underline">
                  privacy & policies
                </span>
                .
              </p>
            </div>
            <button
              type="submit"
              className="w-full bg-violet-800 text-white p-2 rounded-full mt-2"
              onSubmit={handleSubmit}
            >
              {loading ? (
                <div className="w-full flex justify-center h-6 items-center">
                  <Spinner height={6} width={6} message="Loading" />
                </div>
              ) : (
                <>
                  <span>Sign up now</span>
                </>
              )}
            </button>
          </form>
          <h1 className="text-center py-3">Or sign up with</h1>
          <div className="social_icons flex justify-center items-center">
            <Icon
              icon="ic:baseline-facebook"
              className="text-2xl text-violet-800 mx-2 cursor-pointer"
            />
            <Icon
              icon="mdi:google"
              className="text-2xl text-violet-800 mx-2 cursor-pointer"
            />
            <Icon
              icon="ic:baseline-apple"
              className="text-2xl text-violet-800 mx-2 cursor-pointer"
            />
          </div>
          <h2 className="text-center py-3 text-sm">
            Already have an account?{" "}
            <a
              href="/signin "
              className="text-sm text-violet-700 cursor-pointer hover:underline"
            >
              Login
            </a><a
              href="/forgotpassword"
              className="ml-10 text-sm text-violet-700 cursor-pointer hover:underline"
            > 
            Forgot password?
            </a>
          </h2>
          
        </div>
      </div>
    </div>
  );
};

export default NewSignUp;
