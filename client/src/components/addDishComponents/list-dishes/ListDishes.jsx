import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood, fetchFoodByOne, updateFood } from '../../../features/food/foodAction';
import './ListDishes.css';
import { AuthContext } from '../../../context/AuthContext';
import Popup from '../../popup/Popup';
import { useNavigate } from 'react-router-dom';
import UpdateDish from '../update-dish/UpdateDish';

function ListDishes({ authState }) {

    const [selectedFoodId, setSelectedFoodId] = useState(null)
    const [selectedDish, setSelectedDish] = useState(null)
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const dishes = useSelector(state => state.food?.food || [])
    const userId = authState?.user?._id
    const { showPopup, setShowPopup } = useContext(AuthContext)

    const dispatch = useDispatch();

    const handleRemoveClick = (foodId) => {
        setSelectedFoodId(foodId)
        setShowPopup(true);
    }

    const handleDelete = (foodId) => {
        dispatch(deleteFood(foodId)).then(() => {
            setShowPopup(false)
            setSelectedFoodId(null)
            // dispatch(fetchFoodByOne(userId))
        }).catch((error) => {
            console.log(error)
        })
    }

    const handleUpdateClick = (dish) => {
        setSelectedDish(dish)
        setShowUpdateForm(true)
    }

    const handleUpdate = (food) => {
        dispatch(updateFood(selectedDish)).then(() => {
            setShowUpdateForm(false);
            // dispatch(fetchFoodByOne(userId));
        })
    }

    // useEffect(() => {
    //     dispatch(fetchFoodByOne(userId))
    // }, [dispatch, userId])

    if (!userId) {
        return <div className='login_message'>
            <div className="message">
                You are logged out. Please Login
            </div>
        </div>
    }

    return (
        <>
            {showPopup ? <Popup foodId={selectedFoodId} onDelete={handleDelete} value="delete" message="Are you sure you want to remove the dish from your account?" /> : <></>}
            {showUpdateForm ? <UpdateDish onUpdate={handleUpdate} selectedDish={selectedDish} setSelectedDish={setSelectedDish} setShowUpdateForm={setShowUpdateForm} /> :
                <div className='list_container'>
                    <div className="heading">All your dishes</div>
                    <div className="card_container">
                        {Array.isArray(dishes) && dishes.map((dish, index) => (
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
                                <div className="dish_change">
                                    <div className="update"><button type='button' id='update' onClick={() => handleUpdateClick(dish)}>Update</button></div>
                                    <div className="remove"><button type='button' id='remove' onClick={() => handleRemoveClick(dish._id)}>Remove</button></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default ListDishes
