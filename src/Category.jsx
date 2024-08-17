import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const category = useParams();
    console.log(category);
    return (
        <div>
            <h1>category :{category?.category}</h1>
        </div>
    );
};

export default Category;