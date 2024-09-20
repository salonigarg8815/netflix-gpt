import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/validate";

const Login = () => {
    const [isSignInForm, setisSignInForm] = useState(true);
    const [errorMessage, seterrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validate Form Data
        const message = checkValidateData(email.current.value, password.current.value)
        // seterrorMessage(message)
        // if (message) return;

        // // Sigin in/ signup
        // if (!isSignInForm) {
        //     // Signup logic

        // }else{

        // }


    }

    const toggleSignInFrom = () => {
        setisSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg" alt="bg-img" />
            </div>

            <form onSubmit={(e) => e.preventDefault()} className=" w-3/12 absolute p-12 bg-black my-28 mx-auto left-0 right-0 text-white bg-opacity-90 rounded-lg">
                <h1 className="font-bold text-3xl py-2">{isSignInForm ? "Signin" : "Sign up"}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700" />}
                <input ref={email} type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700" />
                <input ref={password} type="Password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700" />
                <p className="text-red-500 font-bold text-lg">{errorMessage}</p>
                <button className="p-2 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick}>{isSignInForm ? "Signin" : "Sign up"}</button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInFrom}>{isSignInForm ? "New to Netflix? Sign up now." : "Already registered SIgn In Now..."}</p>
            </form>
        </div>
    )
}

export default Login;
