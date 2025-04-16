import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSideBar } from '../Redux/sidebarSlice';

const Head = () => {
    const dispatch = useDispatch();
    const toggleSideBarHandler = () => {
        dispatch(toggleSideBar());
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md px-4 py-2 flex justify-between items-center">
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

            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    className="px-4 py-2 w-80 text-gray-400 placeholder:text-gray-400 focus:outline-none border border-[#303030] rounded-l-full"
                />
                <button className="px-4 py-2.5 border border-[#303030] hover:bg-gray-100 rounded-r-full transition duration-300 ease-in-out bg-gray-200">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400"
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
