import React, {useState} from 'react'
import Header from '../../components/header/Header'
import './Home.css'

function Home() {

    // const { setIsSignUp, showAuthOverlay } = useContext(AuthContext)
    // const authState = useSelector(state => state.auth)
    // const userId = authState?.user?._id;
    // const dishes = useSelector(state => state.food?.food || [])
    // const cartItems = useSelector(state => state.cart?.cart?.items || [])

    // const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(getUserDetails());
    //     dispatch(fetchAllFood());
    //     dispatch(getCartDetails(userId));
    // }, [dispatch,userId]);

    // const handleAddToCart = (dish) => {
    //     const userId = authState?.user._id
    //     const { _id: foodId, price } = dish
    //     const quantity = 1;
    //     dispatch(addToCart({ userId, foodId, quantity, price }))
    // }

    return (
        <>
            {/* {showAuthOverlay ? <Auth authState={authState} /> : <></>} */}
            <div className='home'>
                {/* banner */}
                <div className="home_banner">
                    <Header />
                    {/* <Header setIsSignUp={setIsSignUp} /> */}
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
                <div className="home_dish_explore">
                    <div className="explore_heading">
                        <div className="heading">Explore Our Menu</div>
                        <p>Deliciousness Delivered: Your Favorite Meals, Just a Tap Away!</p>
                    </div>

                    <div className="display_dishes_container">
                        <div className="dishes_container">
                            {/* {Array.isArray(dishes) && dishes.map((dish, index) => (

                                <div className="food_card" key={index}>
                                    <div className="img_container">
                                        <img src={dish.image} alt="" />
                                    </div>
                                    <div className="dish_info">
                                        <div className="title">{dish.title}</div>
                                        <div className="categories">
                                            {dish.categories.map((category, index) => (
                                                <p key={index}>{category},</p>
                                            ))}...</div>
                                    </div>
                                    <div className="dish_order">
                                        <div className="update"><button type='button' onClick={() => handleAddToCart(dish)} className={`${cartItems.some(item => item.foodId === dish._id) ? 'disabled' : ''}`}>
                                            {cartItems.some(item => item.foodId === dish._id) ? 'Added' : 'Add to cart'}
                                        </button></div>
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>

                {/* <Footer /> */}
            </div >
        </>
    )
}

export default Home
