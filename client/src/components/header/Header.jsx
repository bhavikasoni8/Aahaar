import React, { useContext, useState, useEffect } from 'react';
import './Header.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { logout } from '../../features/auth/authSlice';

function Header({ setIsSignUp }) {

    const [dropdown, setDropdown] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(true);

    const { setShowAuthOverlay, showAuthOverlay } = useContext(AuthContext)
    const isLoading = useSelector(state => state.cart.loading)
    const cartItems = useSelector(state => state.cart?.cart?.items || [])
    const { accessToken, user, loading } = useSelector(state => state.auth)
    // const { userToken } = useState(true)
    const token = localStorage.getItem('accessToken') || null

    //   useEffect(() => {
    //     if (!isLoading && cartItems?.length > 0) {
    //       setIsCartEmpty(false);
    //     } else {
    //       setIsCartEmpty(true);
    //     }
    //   }, [cartItems, isLoading])

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout())
        setDropdown(false)
    }

    const handleDropdown = () => {
        setDropdown(!dropdown)
    }
    const handleClick = () => {
        setIsSignUp(false)
        setShowAuthOverlay(!showAuthOverlay)
    }

    return (
        <header className="header_wrapper">
            <nav className="nav_wrapper">

                {/* Logo */}
                <div className="nav_left">
                    आहार
                    <div className="home_link" onClick={() => { navigate('/') }}>Home</div>
                </div>

                {/* Log in & Sign up */}
                <div className="nav_right">
                    <ul className='nav_options'>
                        <Link to='/add-dish'><li>Add dishes</li></Link>
                        {
                            !token ?
                                <>
                                    <li onClick={handleClick}>Log in</li>
                                    <li onClick={() => {
                                        setShowAuthOverlay(true)
                                        setIsSignUp(true)
                                    }}>Sign up</li>
                                </>
                                : <>
                                    <div className="user"
                                    >
                                        <div className="user_represent" onClick={handleDropdown}>
                                            <i className="fa-regular fa-user"></i>
                                            <div className="username">
                                                {user?.username}
                                            </div>
                                            <i className={`fa-solid fa-angle-down ${dropdown ? 'rotated' : ''}`}></i>
                                        </div>
                                        <div className={`user_options ${!dropdown ? "hidden" : ""}`}>
                                            <ul>
                                                <li>Profile</li>
                                                <li>Notifications</li>
                                                <li>Bookmarks</li>
                                                <li
                                                    onClick={handleLogout}
                                                >Logout</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                        }
                        <div className="cart_link" onClick={() => navigate('/cart')}><i className="fa-solid fa-cart-shopping"></i>
                            {!isCartEmpty && <span className='cart_count'>{cartItems?.length}</span>} </div>
                    </ul>
                </div>
            </nav>
        </header>
    )
};

export default Header;
