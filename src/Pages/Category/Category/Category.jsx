import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsSummaryCard from '../../Shared/NewsSummaryCard/NewsSummaryCard';

const Category = () => {
    // route a set krr por, component a loader ta call korte hobe
    const categoryNews = useLoaderData();

    return (
        <div>
            <h2>This Category has news {categoryNews.length}</h2>
            {
                categoryNews.map(news =>
                    <NewsSummaryCard
                        key={news._id}
                        news={news}
                    >
                    </NewsSummaryCard>)
            }
        </div>
    );
};

export default Category;