import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: [],
        videoDetails: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addVideoDetails: (state, action) => {
            state.videoDetails = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addVideoDetails } = moviesSlice.actions;
export default moviesSlice.reducer;