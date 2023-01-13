import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Category = () => {
    // route a set krr por, component a loader ta call korte hobe
    const news = useLoaderData();

    return (
        <div>
            <h2>This Category has news {news.length}</h2>
        </div>
    );
};

export default Category;