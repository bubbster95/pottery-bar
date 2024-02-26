import React, { useRef, useState } from "react";
import { useAuth } from '../../Contexts/AuthContexts';


const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const { signup } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }

        try {
            setError('');
            setLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
        } catch { setError('Failed to create an account') }

        setLoading(false);
    }

    return <>
        {error && <div className="alert"> {error} </div>}
        
        <form onSubmit={handleSubmit} className="form">
            <h2>Sign Up</h2>
            <label htmlFor='email-up'>Email</label>
            <input type='Email' id="email-up"  ref={emailRef} required/>

            <label htmlFor='password-up'>Password</label>
            <input type='password' id="password-up" ref={passwordRef} required/>

            <label htmlFor='password-conf-up'>Password Confirmation</label>
            <input type='password' id="password-conf-up" ref={passwordConfirmRef} required />

            <button disabled={loading} type="submit">Sign Up</button>
        </form>
    </>
}

export default SignUp;