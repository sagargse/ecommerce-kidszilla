import { useState, useEffect } from "react";
import axios from "axios";
export const Carousel = () => {
    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('/api/categories');
            setCategories(response.data.categories);
            console.log(response.data.categories);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);
    return (
        <header className="header-home-section">
            <div className="product-category">
                {categories.map(item =>
                    <div className="category category-1">
                        <img src={item.image} alt="product" className="image-responsive img-res" />
                        <div className="category-title">{item.categoryName}</div>
                    </div>
                )}
            </div>
        </header>
    );
}

