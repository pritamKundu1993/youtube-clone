const GOOGLE_API_KEY = 'AIzaSyBjmFndEqJQcGKjPNt1r7PRuyJ0eBg_BAE';

export const YOUTUBE_VIDEOS_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=162&key=${GOOGLE_API_KEY}
`;

export const YOUTUBE_SEARCH_API = `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`;

export const YOUTUBE_VIDEO_WATCH_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=${GOOGLE_API_KEY}&id=`;

// export const YOUTUBE_RECOMENDED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=50&key=${GOOGLE_API_KEY}&relatedToVideoId=`;

export const YOUTUBE_COMMENTS_API = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&maxResults=20&key=${GOOGLE_API_KEY}&videoId=`;
