import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/config'
import logo from './assets/logo.png'

const Navbar = ({ user }) => {
    const [fixed, setFixed] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setFixed(true) // navbar 100 qiymatidan keyin fixed holatga o'tadi
            } else{
                setFixed(false)
            }
        })
    })

    return (
        <div className={`navbar ${fixed && "fixedNav"}`}>
            <a href='#' className='brand'>
                <img src={logo} alt="logo" />
            </a>
            <button className='authButton' onClick={() => auth.signOut()}>
                <img src={user.photoURL} alt="auth user" className='userImage' />
            </button>
        </div>
    );
};

export default Navbar;