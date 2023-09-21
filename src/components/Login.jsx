import Button from "./Button";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import LoadingSpinner from "./LoadingSpinner";
import { splashpro } from "../images";

import { useNavigate } from "react-router-dom";

import Signup from "./Signup";

// const predefinedUsers = [{ email: "user@example.com", password: "1Password" }];
// const signedUpUsers = await listUsers(auth)
// const allUsers = [...predefinedUsers, ...signedUpUsers];

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [signUp, setSignup] = useState(true);

  const handleState = () => {
    setSignup(!signUp);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    //   let response = await firebase.login(auth, email, password)
    //   if (response.hasOwnProperty('message')) {
    //       console.log(response.message)
    //   }

    // const isValidUser = allUsers.find(
    //   (user) => user.email === email && user.password === password
    // );

    // if (!isValidUser) {
    //   setError("Invalid Login Credentials");
    //   return;
    // }
    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("gallery");
    } catch (error) {
      console.log(error.message);
      if (error.message.includes("invalid-login")) {
        setError("Invalid Email or Password");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className=" flex flex-col justify-center items-center w-screen h-screen">
          <div className=" absolute ">
            <img
              src={splashpro}
              alt="hero-img"
              className="object-cover w-screen h-screen opacity-70 z-0"
            />
          </div>
          {signUp ? (
            <form onSubmit={handleLogin}>
              {error && <p className="text-red-500">{error}</p>}
              <h1 className="text-center  text-3xl font-bold">
                {" "}
                Welcome Back!{" "}
              </h1>
              <input
                type="email"
                placeholder="Input email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />

              <input
                type="password"
                placeholder="Input password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <Button text={"Log In"} />
              <p className="text-center my-2">OR</p>
              <div className="flex space-x-5 justify-evenly mt-2 cursor-pointer ">
                <FcGoogle size={30} />
                <FaFacebook
                  size={30}
                  className="rounded-full   text-emerald-500"
                />
                <FaLinkedin
                  size={30}
                  className="rounded-full   text-emerald-500"
                />
              </div>
              <div className="tracking-tight font-semibold my-3">
                Don't have an account ? Sign up
                <span
                  className="cursor-pointer underline px-1 text-emerald-500 font-serif"
                  onClick={handleState}
                >
                  HERE
                </span>
              </div>
            </form>
          ) : (
            <Signup signup={handleState} />
          )}
        </div>
      )}
    </>
  );
};

export default Login;
