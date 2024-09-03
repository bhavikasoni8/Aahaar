import React, { useContext, useEffect, useState, useRef } from 'react';
import './CreateDish.css';
import { useDispatch, useSelector } from 'react-redux';
import { createFood } from '../../../features/food/foodAction';
import { AuthContext } from '../../../context/AuthContext';
import Popup from '../../popup/Popup';
import Compressor from 'compressorjs';

const foodDetails = {
    title: '',
    description: '',
    price: '',
    image: '',
    categories: []
}

function CreateDish() {

    const [foodData, setFoodData] = useState(foodDetails);
    const [emptyFields, setEmptyFields] = useState({})
    const { showPopup, setShowPopup } = useContext(AuthContext);
    const user_Id = useSelector(state => state.auth?.user._id);
    const food = useSelector(state => state.food?.food?.food);

    const dispatch = useDispatch();
    const fileInputRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFoodData({ ...foodData, [name]: value });
    }

    const handleCategoryChange = (e, index) => {
        const { value } = e.target;
        const categories = foodData.categories.slice();
        categories[index] = value;
        setFoodData({ ...foodData, categories });
    }

    const addCategory = () => {
        setFoodData({ ...foodData, categories: [...foodData.categories, ''] });
    }

    const removeCategory = (index) => {
        const categories = foodData.categories.slice();
        categories.splice(index, 1);
        setFoodData({ ...foodData, categories });
    }

    const handleImageUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const validImageTypes = ["image/png", "image/jpg", "image/jpeg"];
            if (!validImageTypes.includes(selectedFile.type)) {
                alert('File type not supported. Only .png, .jpg, .jpeg can be uploaded.');
                fileInputRef.current.value = '';
            } else {
                new Compressor(selectedFile, {
                    quality: 0.6,
                    success(result) {
                        const reader = new FileReader();
                        reader.onload = () => {
                            setFoodData({ ...foodData, image: reader.result });
                        };
                        reader.readAsDataURL(result);
                    },
                    error(err) {
                        console.log(err.message);
                    }
                });
            }
        } else {
            console.log("No file selected");
        }
    };

    const removeImage = () => {
        setFoodData({ ...foodData, image: '' });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newEmptyFields = {};

        const requiredFields = ['title', 'price', 'image', 'description']

        requiredFields.forEach(field => {
            if (!foodData[field] || foodData[field] === '') {
                newEmptyFields[field] = true;
            }
        })

        if (foodData.categories.some(item => item === '')) {
            newEmptyFields.categories = true;
        }

        console.log(newEmptyFields)

        // dispatch(createFood({ foodData, user_Id }));
    }

    useEffect(() => {
        if (food?.user_Id) {
            setShowPopup(true);
        }
    }, [food?.user_Id, setShowPopup]);

    return (
        <>
            {showPopup && <Popup value="create" message="You've successfully added the dish!" />}
            <div className='createDish_container'>
                <form onSubmit={handleSubmit}>
                    <div className="image_container">
                        <div className="image">
                            {foodData.image ? (
                                <>
                                    <img src={foodData.image} alt={foodData.image} />
                                    <div className="image_remove">
                                        <button type='button' onClick={removeImage}>Remove</button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        ref={fileInputRef}
                                        required
                                        onChange={handleImageUpload}
                                    />
                                </>
                            )}
                        </div>
                    </div>
                    <div className="title">
                        <input name="title" id="title" type="text" required placeholder='Product title' onChange={handleChange} />
                    </div>

                    <div className="category">
                        <p>Categories</p>
                        {
                            foodData.categories.map((category, index) => (
                                <div key={index} className="category_item">
                                    <input type="text" name='categories' id="categories" value={category} onChange={(e) => handleCategoryChange(e, index)} />
                                    <div className='cancel_icon' onClick={() => removeCategory(index)}><i className="fa-solid fa-xmark"></i></div>
                                </div>
                            ))
                        }
                        <button type='button' onClick={addCategory}>Add categories</button>
                    </div>
                    <div className="price">
                        <input type="text" name="price" id="price" placeholder="Price (in rupees)" onChange={handleChange} />
                    </div>
                    <div className="description">
                        <textarea name="description" id="description" onChange={handleChange} placeholder='Product description' cols="80" rows="7"></textarea>
                    </div>
                    <div className="submit_btn">
                        <button type='submit'>Add Recipe</button>
                    </div>
                </form >
            </div >
        </>
    );
}

export default CreateDish;
