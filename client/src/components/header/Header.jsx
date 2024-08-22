import React, { useContext, useEffect, useState } from 'react';
import styles from './Header.css';
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../features/auth/authSlice';
// import { useNavigate, Link } from 'react-router-dom';
// import { AuthContext } from '../../context/AuthContext';

function Header({ setIsSignUp }) {

    const [dropdown, setDropdown] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(true)

    //   const { setShowAuthOverlay } = useContext(AuthContext)
    //   const isLoading = useSelector(state => state.cart.loading)
    //   const cartItems = useSelector(state => state.cart?.cart?.items || [])
    //   const { userToken, user, loading } = useSelector(state => state.auth)
    const { userToken } = useState(true)
    //   const token = localStorage.getItem('userToken') || null

    //   useEffect(() => {
    //     if (!isLoading && cartItems?.length > 0) {
    //       setIsCartEmpty(false);
    //     } else {
    //       setIsCartEmpty(true);
    //     }
    //   }, [cartItems, isLoading])

    //   const dispatch = useDispatch();
    //   const navigate = useNavigate();

    //   const handleLogout = () => {
    //     dispatch(logout())
    //   }

    //   const handleUserInfo = () => {
    //     setDropdown(!dropdown)
    //   }

      const handleClick = () => {
        // setShowAuthOverlay(true)
        // setIsSignUp(false)
      }

    return (
        <header className="header_wrapper">
            <nav className="nav_wrapper">
                {/* <div className="header_leftmost_space"></div> */}

                {/* Logo */}
                <div className="nav_left">
                आहार
                    {/* <i className="fa-solid fa-utensils"></i> */}
                    {/* <div className="home_link" onClick={() => { navigate('/') }}>Home</div> */}
                </div>

                {/* Log in & Sign up */}
                <div className="nav_right">
                    <ul>
                        {/* <Link to='/add-dish'><li>Add dishes</li></Link> */}
                        {
                            !userToken ?
                                <>
                                    <li onClick={handleClick}>Log in</li>
                                    <li onClick={() => {
                                        // setShowAuthOverlay(true)
                                        // setIsSignUp(true)
                                    }}>Sign up</li>
                                    </>
                                : <>
                                    <div className="user"
                                    //  onClick={handleUserInfo}
                                     >
                                        <div className="user_represent">
                                            <i className="fa-regular fa-user"></i>
                                            <div className="username">
                                                user
                                                {/* {user?.username} */}
                                                </div>
                                            <i className={`fa-solid fa-angle-down ${dropdown ? 'rotated' : ''}`}></i>
                                        </div>
                                        <div className={`user_options ${!dropdown ? 'hidden' : ""}`}>
                                            <ul>
                                                <li>Profile</li>
                                                <li>Notifications</li>
                                                <li>Bookmarks</li>
                                                <li 
                                                // onClick={handleLogout}
                                                >Logout</li>
                                            </ul>
                                        </div>
                                    </div>
                                </>
                        }

                        {/* <div className="cart_link" onClick={() => navigate('/cart')}><i className="fa-solid fa-cart-shopping"></i>
                            {!isCartEmpty && <span className='cart_count'>{cartItems?.length}</span>} </div> */}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header
