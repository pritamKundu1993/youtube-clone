// src/components/VideoFeed.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularVideos } from '../Redux/YoutubeSlice';
import { RootState, AppDispatch } from '../Redux/store';
import { formatDate, formatViews, parseDuration } from '../utils';
import { Link } from 'react-router';

interface VideoCardData {
    id: string;
    snippet: {
        title: string;
        channelTitle: string;
        publishedAt: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
    };
    statistics?: {
        viewCount?: string;
    };
    contentDetails?: {
        duration: string;
    };
}

const VideoContainer: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { videos, loading, error } = useSelector((state: RootState) => state.youtube);
    const isSidebarOpen = useSelector((state: RootState) => state.app.isSidebarOpen);

    useEffect(() => {
        dispatch(fetchPopularVideos());
    }, [dispatch]);

    if (loading) return <p className="text-center mt-4">Loading videos...</p>;
    if (error) return <p className="text-center text-red-500 mt-4">Error: {error}</p>;

    return (
        <div
            className={`transition-all duration-300 ${
                isSidebarOpen ? 'ml-64' : 'ml-20'
            } pt-[10px] p-4`}
        >
            <div
                className={`grid grid-cols-1 sm:grid-cols-2 ${
                    isSidebarOpen ? 'md:grid-cols-3' : 'md:grid-cols-4'
                } gap-6`}
            >
                {(videos as VideoCardData[]).map((video) => (
                    <Link to={`/watch?v=${video.id}`} key={video.id}>
                        <div className="rounded-lg hover:scale-[1.02] transition-transform duration-300">
                            <div className="relative w-full">
                                <img
                                    src={video.snippet.thumbnails.medium.url}
                                    alt={video.snippet.title}
                                    className="w-full h-48 object-cover rounded-lg"
                                />
                                {video.contentDetails?.duration && (
                                    <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
                                        {parseDuration(video.contentDetails.duration)}
                                    </span>
                                )}
                            </div>
                            <div className="flex gap-3 mt-3">
                                <div className="flex flex-col">
                                    <h2 className="text-sm font-medium leading-snug line-clamp-2">
                                        {video.snippet.title}
                                    </h2>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {video.snippet.channelTitle}
                                    </p>
                                    <p className="text-xs text-gray-500 mt-0.5">
                                        {video.statistics?.viewCount &&
                                            `${formatViews(video.statistics.viewCount)} views • `}
                                        {formatDate(video.snippet.publishedAt)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default VideoContainer;
