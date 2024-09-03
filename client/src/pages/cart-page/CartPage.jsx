import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CartPage.css';
import { fetchCartDetails } from '../../features/cart/cartAction';
import Header from '../../components/header/Header';
import { AuthContext } from '../../context/AuthContext';

function CartPage() {

    const dispatch = useDispatch();
    const { setIsSignUp } = useContext(AuthContext)
    const userId = useSelector(state => state.auth?.user?.user);
    const { cart, loading } = useSelector(state => state.cart);

    console.log({ cart });

    useEffect(() => {

        dispatch(fetchCartDetails(userId));
    }, [dispatch, userId]);

    return (
        <div className='cart_wrapper'>
            <div className="cart_banner">
                <Header setIsSignUp={setIsSignUp} />
            </div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div className="cart_container">
                    <div className="cart">
                        <div className="cart_heading">
                            My Shopping Cart
                        </div>
                        {cart.length === 0 ? (
                            <div className="cart_empty">
                                <p>Your cart is empty.</p>
                            </div>
                        ) : (
                            <div className="cart_items_container">
                                <ul>
                                    {cart.items.map(item => (
                                        <li key={item.id} className="food">
                                            <div className="food_item">
                                                <div className="image_container">
                                                    <img src={item.imageUrl} alt={item.name} />
                                                </div>
                                                <div className="order_details">
                                                    <div className="item_title">{item.name}</div>
                                                    <div className="select_options">
                                                        <div className="quantity">
                                                            <span className={`decrement ${item.quantity === 1 ? 'disabled' : ''}`}>-</span>
                                                            <span>{item.quantity}</span>
                                                            <span className="increment">+</span>
                                                        </div>
                                                        <div className="delete">Remove</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <div className="order_summary">
                        <div className="cart_total">
                            <div className="total_heading">Order Summary</div>
                            <div className="receipt">
                                <div className="receipt_col">
                                    <span>Subtotal</span>
                                    {/* <span>${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span> */}
                                </div>
                                <div className="receipt_col">
                                    <span>Shipping</span>
                                    <span>$5.00</span>
                                </div>
                                <div className="receipt_col total">
                                    <span>Total</span>
                                    {/* <span>${(cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + 5.00).toFixed(2)}</span> */}
                                </div>
                            </div>
                            <div className="checkout">
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartPage;
