import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API =
  import.meta.env.VITE_BASE_URL + '/?s=man&apikey=' + import.meta.env.VITE_KEY

const initialState = {
  movies: [],
  loading: false,
}

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
  try {
    const res = await axios.get(API)
    return res?.data?.Search
  } catch (e) {
    throw new Error(e)
  }
})

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovies.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.loading = false
      state.movies = action.payload
    })
    builder.addCase(fetchMovies.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default movieSlice.reducer
