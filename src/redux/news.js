import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchNews = createAsyncThunk(
    'news/fetchNews',
    async () => {
        // const token = localStorage.getItem('token')
         const response = await axios({
                method:"GET",
                url:"https://newsapi.org/v2/everything?q=tesla&from=2024-01-23&sortBy=publishedAt&apiKey=79352eed15184592ab4bb50456910b5d"
                // headers:{
                //     Authorization: token
                // }
            })
        return response.data;
    }
);

const initialState = {
    message: '',
    loading: true,
    success: null,
    allNews: [],
    error: '',
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers:
    {
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setMessage: (state, action) => {
            state.message = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchNews.pending, (state) => {
            return { ...state, loading: true, error: null, }
          })
          .addCase(fetchNews.fulfilled, (state, action) => {
            return { ...state, allNews: action.payload.articles}

          })
          .addCase(fetchNews.rejected, (state, action) => {
            return { ...state }
          });
      },
})

export const { setLoading, setMessage } = newsSlice.actions;
export default newsSlice.reducer;