import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { YOUTUBE_VIDEOS_API } from '../utils/constanct';

// Define the structure of a video item (simplified for now)
interface Video {
    id: string;
    snippet: {
        title: string;
        thumbnails: {
            medium: {
                url: string;
            };
        };
        channelTitle: string;
    };
    statistics?: {
        viewCount: string;
    };
}

interface YouTubeState {
    videos: Video[];
    loading: boolean;
    error: string | null;
}

const initialState: YouTubeState = {
    videos: [],
    loading: false,
    error: null,
};

// Async thunk to fetch popular videos
export const fetchPopularVideos = createAsyncThunk<Video[]>(
    'youtube/fetchPopularVideos',
    async () => {
        const response = await axios.get(YOUTUBE_VIDEOS_API);
        return response.data.items;
    }
);

// Create the slice
const youtubeSlice = createSlice({
    name: 'youtube',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularVideos.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPopularVideos.fulfilled, (state, action) => {
                state.loading = false;
                state.videos = action.payload;
            })
            .addCase(fetchPopularVideos.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch videos';
            });
    },
});

export default youtubeSlice.reducer;
