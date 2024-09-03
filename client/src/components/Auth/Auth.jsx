import React, { useContext, useState } from 'react';
import './Auth.css';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import { loginUser, registerUser } from '../../features/auth/authAction';
import { Oval } from 'react-loader-spinner';

const initialState = {
    username: '',
    email: '',
    password: ''
}

function Auth() {
    const [formData, setFormData] = useState(initialState);
    const [showMessage, setShowMessage] = useState(false);
    const [authMessage, setAuthMessage] = useState('');
    const { loading, error } = useSelector(state => state.auth);
    const { isSignUp, setIsSignUp, setShowAuthOverlay } = useContext(AuthContext);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevValue => ({ ...prevValue, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowMessage(false);
    
        try {
            if (isSignUp) {
                // Register user
                await dispatch(registerUser(formData)).unwrap();
                setAuthMessage('Registration successful! Please log in.');
                setIsSignUp(false); // Switch to login form
            } else {
                // Login user
                await dispatch(loginUser(formData)).unwrap();
                setAuthMessage('Login successful!');
                setShowAuthOverlay(false); 
            }
        } catch (err) {
            setAuthMessage(err.message || 'An error occurred');
        } finally {
            setShowMessage(true); 
        }
    };

    return (
        <div className='auth_wrapper'>
            {loading && (
                <div className="full_screen_loader">
                    <Oval
                        height={80}
                        width={80}
                        color="#4fa94d"
                        visible={true}
                        ariaLabel='oval-loading'
                        secondaryColor="#4fa94d"
                        strokeWidth={2}
                        strokeWidthSecondary={2}
                    />
                </div>
            )}
            {!loading && (
                <div className="auth_content">
                    <div className="title_container">
                        <div className="title">
                            {isSignUp ? "Sign up" : "Login"}
                        </div>
                        <i className="fa-solid fa-circle-xmark" onClick={() => setShowAuthOverlay(false)}></i>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <input 
                                type="text" 
                                placeholder='Email' 
                                name='email' 
                                value={formData.email} 
                                onChange={handleChange} 
                            />
                            {isSignUp && (
                                <input 
                                    type="text" 
                                    placeholder='Username' 
                                    name='username' 
                                    value={formData.username} 
                                    onChange={handleChange} 
                                />
                            )}
                            <input 
                                type="password" 
                                placeholder='Password' 
                                name='password' 
                                value={formData.password} 
                                onChange={handleChange} 
                            />
                        </div>
                        {showMessage && (
                            <div className={`auth_message ${error ? 'error' : 'success'}`}>
                                {authMessage}
                            </div>
                        )}
                        <div className="login_btn">
                            <button type='submit'>{isSignUp ? "Sign up" : "Login"}</button>
                        </div>
                    </form>
                    <div className="or-container">
                        OR
                        {isSignUp ? (
                            <div className="auth_option_section">
                                Already a user?
                                <div className="auth_option" onClick={() => setIsSignUp(false)}>Login</div>
                            </div>
                        ) : (
                            <div className="auth_option_section">
                                Don't have an account?
                                <div className="auth_option" onClick={() => setIsSignUp(true)}>Sign up</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Auth;
