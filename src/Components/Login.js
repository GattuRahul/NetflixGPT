import { checkSignInValidity } from "../utilities/checkSignInValidity";
import Header from "./Header";
import { useState, useRef } from "react";

const Login = () => {
    const [isSignInPage, setIsSignInPage] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const checkFormValidity = (name, email, password) => {
        const error = checkSignInValidity(name, email, password);
        setErrorMessage(error);
    }

  return (
    <div>
      <Header/>
      <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/e94073b0-a056-402f-9015-16cb1e7e45c2/web/IN-en-20251110-TRIFECTA-perspective_46e74acc-70aa-4691-988a-dbcf958149d1_large.jpg" alt="Login Banner" />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="absolute w-3/12 mx-auto left-0 text-white right-0 bg-opacity-80 bg-black p-12 my-36 rounded-md">
        <h1 className="text-2xl mb-2 font-bold"> {isSignInPage ? "Sign In" : "Sign Up"}</h1>
        {isSignInPage ? null : <input type="text" ref={name} placeholder="Name" className="w-full p-4 my-4 bg-gray-600" onChange={() => checkFormValidity(name.current?.value, email.current?.value, password.current?.value)}/>}
        <input type="text" ref={email} placeholder="Email address" className="w-full p-4 my-4 bg-gray-600" onChange={() => checkFormValidity(email.current?.value, name.current?.value, password.current?.value)}/>
        <input type="password" ref={password} placeholder="Password" className="w-full p-4 my-4 bg-gray-600" onChange={() => checkFormValidity(password.current?.value, email.current?.value, name.current?.value)}/>
        <p className="text-red-500">{errorMessage}</p>
        <button type="submit" className="w-full p-4 my-4 bg-red-600 rounded-lg">{isSignInPage ? "Sign In" : "Sign Up"}</button>
        {isSignInPage ? "New to Netflix?" : "Already registered?"} <button type="button" className="text-white" onClick={() => setIsSignInPage(!isSignInPage)}>{isSignInPage ? "Sign Up" : "Sign In"}</button>
      </form>
    </div>
  );
}

export default Login;
