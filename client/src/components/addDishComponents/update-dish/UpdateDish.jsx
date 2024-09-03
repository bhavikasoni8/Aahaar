import React, { useRef } from 'react';
import Compressor from 'compressorjs';

function UpdateDish({ selectedDish: updatedFoodData, setSelectedDish: setUpdatedFoodData, onUpdate, setShowUpdateForm }) {

    const fileInputRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(updatedFoodData)
    }

    const changeImage = (e) => {
        const { image } = updatedFoodData
        setUpdatedFoodData({ ...updatedFoodData, image: '' })
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
                            setUpdatedFoodData({ ...updatedFoodData, image: reader.result });
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
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedFoodData({ ...updatedFoodData, [name]: value })
    }

    const handleCategoryChange = (e, index) => {
        const { value } = e.target;
        const categories = updatedFoodData.categories.slice();
        categories[index] = value;
        setUpdatedFoodData({ ...updatedFoodData, categories })
    }

    const removeCategory = (index) => {
        const categories = updatedFoodData.categories.slice();
        categories.splice(index, 1);
        setUpdatedFoodData({ ...updatedFoodData, categories })
    }

    const addCategory = () => {
        setUpdatedFoodData({ ...updatedFoodData, categories: [...updatedFoodData.categories, ''] })
    }

    return (
        <div>
            <div className='createDish_container'>
                <form onSubmit={handleSubmit}>
                    <div className="image_container">
                        <div className="image">
                            {updatedFoodData && updatedFoodData.image ? (
                                <>
                                    <img src={updatedFoodData?.image} alt={updatedFoodData?.image} />
                                    <div className="image_remove">
                                        <button type='button' onClick={changeImage}>Change Image</button>
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
                        <input name="title" id="title" type="text" required value={updatedFoodData?.title} onChange={handleChange} />
                    </div>

                    <div className="category">
                        <p>Categories</p>
                        {
                            updatedFoodData?.categories.map((category, index) => (
                                <div key={index} className="category_item">
                                    <input type="text" name='categories' id="categories" value={category} onChange={(e) => handleCategoryChange(e, index)} />
                                    <div className='cancel_icon' onClick={() => removeCategory(index)}><i className="fa-solid fa-xmark"></i></div>
                                </div>
                            ))
                        }
                        <button type='button' onClick={addCategory}>Add categories</button>
                    </div>
                    <div className="price">
                        <input type="text" value={updatedFoodData?.price} name="price" id="price" placeholder="Price (in rupees)" onChange={handleChange} />
                    </div>
                    <div className="description">
                        <textarea name="description" value={updatedFoodData?.description} id="description" onChange={handleChange} placeholder='Product description' cols="80" rows="7"></textarea>
                    </div>
                    <div className="submit_btn">
                        <button type='submit'>Submit Changes</button>
                    </div>
                </form >
            </div >
        </div>
    )
}

export default UpdateDish
