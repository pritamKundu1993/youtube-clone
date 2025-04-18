import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeSideBar } from '../Redux/sidebarSlice';
import { useSearchParams } from 'react-router';
import { YOUTUBE_COMMENTS_API, YOUTUBE_VIDEO_WATCH_API } from '../utils/constanct';
import { formatDate } from '../utils';

type CommentType = {
    id: string;
    snippet: {
        topLevelComment: {
            snippet: {
                authorDisplayName: string;
                textDisplay: string;
            };
        };
    };
};

type VideoInfoType = {
    snippet: {
        title: string;
        channelTitle: string;
        publishedAt: string;
    };
    statistics: {
        viewCount: string;
        likeCount: string;
    };
};

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');

    const dispatch = useDispatch();
    const [comments, setComments] = useState<CommentType[]>([]);
    const [videoInfo, setVideoInfo] = useState<VideoInfoType | null>(null);

    useEffect(() => {
        dispatch(closeSideBar());
    }, [dispatch]);

    // Fetch Comments
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch(`${YOUTUBE_COMMENTS_API}${videoId}`);
                const data = await res.json();
                setComments(data.items || []);
            } catch (err) {
                console.error('Failed to fetch comments:', err);
            }
        };
        if (videoId) fetchComments();
    }, [videoId]);

    // Fetch Video Info
    useEffect(() => {
        const fetchVideoInfo = async () => {
            try {
                const res = await fetch(`${YOUTUBE_VIDEO_WATCH_API}${videoId}`);
                const data = await res.json();
                setVideoInfo(data.items[0]);
            } catch (err) {
                console.error('Failed to fetch video info:', err);
            }
        };
        if (videoId) fetchVideoInfo();
    }, [videoId]);

    return (
        <div className="mt-[65px] p-4 bg-gray-100 min-h-screen flex flex-col lg:flex-row gap-6 ml-[250px]">
            {/* Main Video Section */}
            <div className="w-full lg:w-[70%]">
                <div className="relative aspect-w-16 aspect-h-9 w-full rounded-lg overflow-hidden shadow-lg">
                    <iframe
                        width="100%"
                        height="480"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        title="YouTube video player"
                        className="w-full h-[400px]"
                    ></iframe>
                </div>

                {/* Video Metadata */}
                {videoInfo && (
                    <div className="mt-4 bg-white p-4 rounded shadow-sm">
                        <h2 className="text-2xl font-bold mb-2">{videoInfo.snippet.title}</h2>
                        <div className="text-sm text-gray-700 flex gap-4 items-center">
                            <span className="font-semibold">{videoInfo.snippet.channelTitle}</span>
                            <span>
                                {parseInt(videoInfo.statistics.viewCount).toLocaleString()} views
                            </span>
                            <span>{formatDate(videoInfo.snippet.publishedAt)}</span>
                            <span>
                                👍 {parseInt(videoInfo.statistics.likeCount).toLocaleString()}
                            </span>
                        </div>
                    </div>
                )}

                {/* Comments */}
                <div className="mt-6">
                    <h2 className="text-xl font-bold mb-4">Comments</h2>
                    {comments.map((comment) => (
                        <div key={comment.id} className="mb-4 p-3 bg-white rounded shadow-sm">
                            <p className="font-semibold">
                                {comment.snippet.topLevelComment.snippet.authorDisplayName}
                            </p>
                            <p>{comment.snippet.topLevelComment.snippet.textDisplay}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Related Videos (Optional: Enable when fixed) */}
            {/* <div className="w-full lg:w-[30%]">
                <h2 className="text-xl font-bold mb-4">Related Videos</h2>
                {relatedVideos.map((video) => (
                    <div
                        key={video.id.videoId}
                        className="flex items-start gap-3 mb-4 cursor-pointer"
                    >
                        <img
                            src={video.snippet.thumbnails.medium.url}
                            alt={video.snippet.title}
                            className="w-40 rounded"
                        />
                        <div>
                            <p className="font-medium">{video.snippet.title}</p>
                            <p className="text-sm text-gray-600">{video.snippet.channelTitle}</p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default WatchPage;
