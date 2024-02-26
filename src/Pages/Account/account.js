import React  from "react";

import SignIn from "../../Components/Sign_In/sign-in";
import SignUp from "../../Components/Sign_Up/sign-up";

import './account.scss'

const Account = () => {
    return <>
        <h1 className="center">Sign Up Or Sign In</h1>
        <div className="logins">
            <SignIn />
            <SignUp />
        </div>
    </>
}

export default Account