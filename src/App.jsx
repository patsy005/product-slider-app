import { useDispatch, useSelector } from 'react-redux'
import './index.scss'
import ProductsSlider from './ui/productsSlider/ProductsSlider'
import Spinner from './components/spinner/Spinner'
import { useEffect } from 'react'
import { fetchProducts } from './slices/ProductsSlice'
import ErrorMsg from './components/errorMsg/ErrorMsg'

function App() {
	const dispatch = useDispatch()
	const isFetching = useSelector(state => state.products.isFetching)
	const error = useSelector(state => state.products.error)

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])
	return <>{isFetching ? <Spinner /> : error.length ? <ErrorMsg message={error} /> : <ProductsSlider />}</>
}

export default App
