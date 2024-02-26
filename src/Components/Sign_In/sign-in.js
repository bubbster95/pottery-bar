import React, { useRef, useState } from "react";
import { useAuth } from '../../Contexts/AuthContexts';


const SignIn = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { signin } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await signin(emailRef.current.value, passwordRef.current.value);
        } catch { setError('Failed to sign in') }

        setLoading(false);
    }

    return <>
        {error && <div className="alert"> {error} </div>}
        
        <form onSubmit={handleSubmit} className="form">
            <h2>Sign In</h2>
            <label htmlFor='email'>Email</label>
            <input type='email' id="email"  ref={emailRef} required/>

            <label htmlFor='password'>Password</label>
            <input type='password' id="password" ref={passwordRef} required/>
            <button disabled={loading} type="submit">Sign In</button>
        </form>
    </>
}

export default SignIn;