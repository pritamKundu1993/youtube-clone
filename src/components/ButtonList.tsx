import React, { useState } from 'react';
import CategoryButtonList from './Button';

const categories = [
    'All',
    'Film criticisms',
    'Daredevil',
    'Science fiction',
    'WWE Superstars',
    'News',
    'JavaScript',
    'Podcasts',
    'Satire',
    'Music',
    'Mixes',
    'RRB NTPC',
    'General',
];

const ButtonList = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    return (
        <div className="text-white">
            <CategoryButtonList
                categories={categories}
                selected={selectedCategory}
                onSelect={setSelectedCategory}
            />
        </div>
    );
};

export default ButtonList;
