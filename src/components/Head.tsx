import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../Redux/sidebarSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constanct';

const Head = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchQuery.trim()) getSearchSuggestions();
        }, 300);

        return () => clearTimeout(timer);
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        try {
            const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
            const json = await data.json();
            setSuggestions(json[1]);
        } catch (error) {
            console.error('Failed to fetch suggestions:', error);
        }
    };

    const toggleSideBarHandler = () => {
        dispatch(toggleSideBar());
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md px-4 py-2 flex justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center gap-2">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWfKU53G_dKTqay0DwUdMIKDauowk5_Ruug&s"
                    alt="menu"
                    className="w-10 h-10 cursor-pointer"
                    onClick={toggleSideBarHandler}
                />
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaei2dLGGPpRPJG0N-KUjMoRaI9qH27ZI2kw&s"
                    alt="youtube logo"
                    className="h-10"
                />
            </div>

            {/* Search Section */}
            <div className="relative flex flex-col items-center">
                <div className="flex items-center relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-4 py-2 w-80 text-gray-700 placeholder:text-gray-400 focus:outline-none border border-[#303030] rounded-l-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                    />
                    {/* Clear (X) icon */}
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery('')}
                            className="absolute right-[60px] text-red-500 hover:text-red-700 focus:outline-none font-bold cursor-pointer"
                        >
                            ✕
                        </button>
                    )}
                    <button className="px-4 py-2.5 border border-[#303030] hover:bg-gray-100 rounded-r-full transition duration-300 ease-in-out bg-gray-200">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 text-gray-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                            />
                        </svg>
                    </button>
                </div>

                {/* Suggestions Dropdown */}
                {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute top-12 w-full bg-white border border-gray-300 rounded-md shadow-md z-50">
                        <ul className="max-h-60 overflow-y-auto">
                            {suggestions.map((s, index) => (
                                <li
                                    key={index}
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
                                    onClick={() => {
                                        setSearchQuery(s);
                                        setShowSuggestions(false);
                                    }}
                                >
                                    🔍 {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            {/* User Icon */}
            <div>
                <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
                    alt="user icon"
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>
        </div>
    );
};

export default Head;
