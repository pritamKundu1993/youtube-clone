import { createSlice } from '@reduxjs/toolkit';

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        isSidebarOpen: true,
    },
    reducers: {
        toggleSideBar: (state) => {
            state.isSidebarOpen = !state.isSidebarOpen;
        },
        closeSideBar: (state) => {
            state.isSidebarOpen = false;
        },
    },
});
export default sidebarSlice.reducer;
export const { toggleSideBar, closeSideBar } = sidebarSlice.actions;
