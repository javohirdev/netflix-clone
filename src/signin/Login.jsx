import React from 'react';
import { signInWithGoogle } from '../firebase/config';
import logo from '../components/assets/logo.png'

const Login = () => {
    return (
        <div className='login'>
            <img src={logo} alt="logo" loading='lazy' /> <br />
            <button className="loginBtn" onClick={signInWithGoogle}>
                Sign in with Goolge
            </button>
        </div>
    );
};

export default Login;