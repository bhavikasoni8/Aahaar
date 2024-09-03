import React, { useContext } from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';
import './AddDish.css';
import CreateDish from '../../components/addDishComponents/create-dish/CreateDish';
import ListDishes from '../../components/addDishComponents/list-dishes/ListDishes';
import Header from '../../components/header/Header';
import { AuthContext } from '../../context/AuthContext';

function AddDish() {
    const { setIsSignUp } = useContext(AuthContext)
    return (
        <div className='addDish_container'>
            <div className='banner'>
                <div className="add_dish_header_container">
                    <Header setIsSignUp={setIsSignUp} />
                </div>
                <div className='banner_slogan'>
                    From Stove to Smartphone: Share Your Flavor with the World!
                </div>
            </div>

            <div className='dish_control_container'>
                <div className='dish_control_menu'>
                    <div className='menu'>
                        <ul>
                            <Link to='create-dish'>
                                <li className='active'>Add Dish</li>
                            </Link>
                            <Link to='list-dishes'>
                                <li className='active'>All your dishes</li>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div className='dish_control_form_container'>
                    <Routes>
                        <Route path='create-dish' element={<CreateDish />} />
                        <Route path='list-dishes' element={<ListDishes />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default AddDish;
