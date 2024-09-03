import React from 'react';
import './Card.css'

function Card({ dish, handleAddToCart, cartItems }) {
    const isAddedToCart = cartItems.some((item) => String(item._id) == String(dish._id))

    return (
        <div className='card_wrapper'>
            <div className="card_wrapper_inner">
                <div className="food_img_container">
                    <img src={dish.image} alt="" />
                </div>
                <div className="food_details_wrapper">
                    <div className="dish_info">
                        <div className="dish_title_rating">
                            <div className="title">{dish.title} </div>
                            <div className="rating">4.6 <i className="fa-solid fa-star"></i></div>
                        </div>
                        <div className="categories">
                            {dish.categories.map((category, index) => (
                                <p key={index}>{category},&nbsp; </p>
                            ))}...</div>
                    </div>
                    <div className="dish_order">
                        <button
                            type='button'
                            onClick={() => handleAddToCart(dish)}
                            className={isAddedToCart ? 'disabled' : ''}
                            disabled={isAddedToCart} // Disable the button if already added to cart
                        >
                            {isAddedToCart ? 'Added' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
