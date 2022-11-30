import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  search: [],
  loading: false,
}

export const searchMovies = createAsyncThunk(
  'search/searchMovies',
  async (search) => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_URL +
          `/?s=${search}&apikey=` +
          import.meta.env.VITE_KEY
      )
      return res?.data?.Search
    } catch (e) {
      throw new Error(e)
    }
  }
)

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.loading = true
    })
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.loading = false
      state.search = action.payload
    })
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message
    })
  },
})

export default searchSlice.reducer
