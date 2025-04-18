// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import youtubeReducer from './youtubeSlice';
import sidebarReducer from './sidebarSlice';

const store = configureStore({
    reducer: {
        youtube: youtubeReducer,
        app: sidebarReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
