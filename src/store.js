import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/ProductsSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
    }
})

export default store