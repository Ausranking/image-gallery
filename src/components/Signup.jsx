import { auth } from "../firebase"; // Firebase authentication instance
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "./Button";

const Signup = ({ signup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Create a user with the provided email and password
      await createUserWithEmailAndPassword(auth, email, password);

      // User successfully registered, you can redirect to the gallery or dashboard page.
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSignup}>
        {error && <p className="text-red-500">{error}</p>}
        <h1 className="text-center  text-3xl font-bold"> Register </h1>
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
        <Button text={"Sign Up"} />
        <p className="text-center my-2">OR</p>
        <div className="flex space-x-5 justify-evenly mt-2 cursor-pointer ">
          <FcGoogle size={30} />
          <FaFacebook size={30} className="rounded-full   text-emerald-500" />
          <FaLinkedin size={30} className="rounded-full   text-emerald-500" />
        </div>
        <div className="tracking-tight font-semibold my-3">
          Already a user ? Log in
          <span
            className="cursor-pointer underline px-1 text-emerald-500 font-serif"
            onClick={signup}
          >
            HERE
          </span>
        </div>
      </form>
    </div>
  );
};

export default Signup;
