import React, { useContext, useState, useEffect } from 'react';
import './Auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import { loginUser, registerUser } from '../../features/auth/authAction';

const initialState = {
    username: '',
    email: '',
    password: ''
}

function Auth() {

    const [formData, setFormData] = useState(initialState);
    const [isAuthError, setIsAuthError] = useState(false);
    const [authMessage, setAuthMessage] = useState('');

    const { accessToken, loading, error } = useSelector(state => state.auth);
    const { isSignUp, setIsSignUp, setShowAuthOverlay } = useContext(AuthContext);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevValue => ({ ...prevValue, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData;
        if (isSignUp) {
            dispatch(registerUser({ username, email, password }));
        } else {
            dispatch(loginUser({ email, password }));
        }
    }

    useEffect(() => {
        if (accessToken) {
            setAuthMessage('Login successful!');
            setIsAuthError(false);
            setTimeout(() => {
                setShowAuthOverlay(false);
            }, 2000); // Close the overlay after 2 seconds
        } else if (error) {
            setAuthMessage(error.message || 'Login unsuccessful');
            setIsAuthError(true);
        }
    }, [accessToken, error, setShowAuthOverlay]);

    return (
        <div className='auth_wrapper'>
            <div className="auth_content">
                <div className="title_container">
                    <div className="title">
                        {isSignUp ? "Sign up" : "Login"}</div>
                    <i className="fa-solid fa-circle-xmark" onClick={() => {
                        setShowAuthOverlay(false);
                        setIsAuthError(false);
                        setAuthMessage('');
                    }}></i>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-field">
                        <input type="text" placeholder='Email' name='email' onChange={handleChange} />
                        {isSignUp && <input type="text" placeholder='Username' name='username' onChange={handleChange} />}
                        <input type="password" placeholder='Password' name='password' onChange={handleChange} />
                    </div>
                    {authMessage && (
                        <div className={`auth_message ${isAuthError ? 'error' : 'success'}`}>
                            {authMessage}
                        </div>
                    )}
                    <div className="login_btn">
                        <button type='submit'>{isSignUp ? "Sign up" : "Login"}</button>
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

export default Auth;
