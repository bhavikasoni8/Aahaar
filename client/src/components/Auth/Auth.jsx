import React, { useContext, useState } from 'react';
import './Auth.css'
import { AuthContext } from '../../context/AuthContext';

const initialState = {
    username: '',
    email: '',
    password: ''
}

function Auth() {

    const [formData, setFormData] = useState(initialState);

    const { isSignUp, setIsSignUp, setShowAuthOverlay } = useContext(AuthContext);

    return (
        <div className='auth_wrapper'>
            <div className="auth_content">
                <div className="title_container">
                    <div className="title">
                        {isSignUp ? "Sign up" : "Login"}</div>
                    <i className="fa-solid fa-circle-xmark" onClick={() => setShowAuthOverlay(false)}></i>
                </div>
                <form>
                    <div className="input-field">
                        <input type="text" placeholder='Username' />
                        {isSignUp ? <input type="text" placeholder='Email' /> : <></>}
                        <input type="text" placeholder='Password' />
                    </div>
                    <div className="login_btn">
                        <button>{isSignUp ? "Sign up" : "Login"}</button>
                    </div>
                </form>
                <div className="or-container">OR
                    {isSignUp ?
                        <div className="auth_option_section">
                            Already a user?
                            <div className="auth_option" onClick={() => setIsSignUp(false)}>Login</div>
                        </div>
                        : <div className="auth_option_section">
                            Don't have an account?
                            <div className="auth_option" onClick={() => setIsSignUp(true)}>Sign up</div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Auth
