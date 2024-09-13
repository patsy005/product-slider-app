import { createAsyncThunk, createSlice, } from '@reduxjs/toolkit'

const initialState = {
	products: [],
	isFetching: false,
	error: '',
	currentIndex: 0,
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
	try {
		const response = await fetch('https://fakestoreapi.com/products')
		const data = await response.json()
		return data
	} catch (err) {
		throw new Error(err.message)
	}
})

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		prevSlide: state => {
			state.currentIndex = state.currentIndex === 0 ? state.products.length - 1 : state.currentIndex - 1
		},
		nextSlide: state => {
			state.currentIndex = state.currentIndex === state.products.length - 1 ? 0 : state.currentIndex + 1
		},
	},
	extraReducers: builder => {
		builder
			.addCase(fetchProducts.pending, state => {
				state.isFetching = true
			})
			.addCase(fetchProducts.fulfilled, (state, action) => {
				state.products = action.payload
				state.isFetching = false
				state.error = ''
			})
			.addCase(fetchProducts.rejected, state => {
				state.isFetching = false
				state.error = 'Error fetching products. Please try again later.'
			})
	},
})

export default productsSlice.reducer
export const { prevSlide, nextSlide } = productsSlice.actions
export const products = state => state.products.products