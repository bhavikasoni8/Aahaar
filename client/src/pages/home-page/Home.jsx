import React, { useState, useEffect, useContext } from 'react'
import Header from '../../components/header/Header'
import './Home.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllFoodItems } from '../../features/food/foodAction';
import Card from '../../components/card/Card';
import { fetchCartDetails } from '../../features/cart/cartAction';
import Footer from '../../components/footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import Auth from '../../components/Auth/Auth';

function Home() {

    const { setIsSignUp, showAuthOverlay } = useContext(AuthContext)
    const authState = useSelector(state => state.auth)
    const userId = authState?.user?._id;
    const dishes = useSelector(state => state.food?.food || [])
    const cartItems = useSelector(state => state.cart?.cart?.items || [])
    // console.log({ dishes });


    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getUserDetails());
        console.log(userId);
        dispatch(fetchAllFoodItems());
        dispatch(fetchCartDetails(userId));
    }, [dispatch, userId]);

    const handleAddToCart = (dish) => {
        // const userId = authState?.user._id
        const { _id: foodId, price } = dish
        const quantity = 1;
        // dispatch(addToCart({ userId, foodId, quantity, price }))
    }

    return (
        <>
            {showAuthOverlay ? <Auth authState={authState} /> : <></>}
            <div className='home'>
                {/* banner */}
                <div className="home_banner">
                    <Header setIsSignUp={setIsSignUp} />
                    <div className="banner_content">
                        <div className='banner_logo_name'>
                            <i className="fa-solid fa-utensils"></i>
                        </div>
                        <div className='banner_text'>Discover the best food around you</div>
                        {/* Search input */}
                        <div className="search_container">
                            <input type="text" placeholder="Search for a dish" />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                    </div>
                </div>

                {/* dishes */}
                <div className="dish_explore_wrapper">
                    <div className="dish_explore_inner">
                        <div className="explore_heading">
                            <div className="heading">Explore Our Menu</div>
                            <p>Deliciousness Delivered: Your Favorite Meals, Just a Tap Away!</p>
                        </div>
                        <div className="dishes_container">
                            {Array.isArray(dishes) && dishes.map((dish, index) => (
                                <Card key={index} dish={dish} handleAddToCart={handleAddToCart} cartItems={cartItems} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* <Footer /> */}
                {/* <Footer /> */}
            </div >
        </>
    )
}

export default Home
