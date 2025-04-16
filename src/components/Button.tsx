import React from 'react';

type CategoryButtonListProps = {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
};

const CategoryButtonList: React.FC<CategoryButtonListProps> = ({
    categories,
    selected,
    onSelect,
}) => {
    return (
        <div className="flex overflow-x-auto gap-2 px-4 py-2 scrollbar-hide">
            {categories.map((category) => (
                <button
                    key={category}
                    onClick={() => onSelect(category)}
                    className={`flex-shrink-0 px-4 py-1.5 text-sm rounded-lg whitespace-nowrap cursor-pointer transition duration-300 ease-in-out 
            ${
                selected === category
                    ? 'bg-black text-white font-medium'
                    : 'bg-gray-300 text-black hover:bg-neutral-700 hover:text-white'
            }`}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryButtonList;
