import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../Redux/sidebarSlice';
import { useSearchParams } from 'react-router';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    // console.log(searchParams.get('v'));
    const videoId = searchParams.get('v');

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeSideBar());
    }, []);
    return (
        <div className="mt-[65px] ml-25 p-4 bg-gray-100 min-h-screen">
            <div className="w-full max-w-4xl mx-auto">
                <div className="relative aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        width="853"
                        height="480"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default WatchPage;
