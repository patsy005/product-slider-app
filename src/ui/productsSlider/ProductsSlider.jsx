import { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextSlide, products } from '../../slices/ProductsSlice'
import ProductCard from '../productCard/ProductCard'

function ProductsSlider() {
	const dispatch = useDispatch()
	const productsList = useSelector(products)
	const currentIndex = useSelector(state => state.products.currentIndex)
	const [isPaused, setIsPaused] = useState(false)
	const intervalRef = useRef(null)

	useEffect(() => {
		if (!isPaused) {
			intervalRef.current = setInterval(() => {
				dispatch(nextSlide())
			}, 5000)
		}

		return () => {
			clearInterval(intervalRef.current)
		}
	}, [dispatch, currentIndex, isPaused])

	const handleTooltipMouseEvents = schouldPause => {
		setIsPaused(schouldPause)
		schouldPause && clearInterval(intervalRef.current)
	}

	return (
		<div className="products-slider">
			<div className="carousel-slides" aria-live='polite'>
				{productsList.map((product, index) => (
					<ProductCard
						key={index}
						product={product}
						index={index}
						className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
						tooltipFn={handleTooltipMouseEvents}

					/>
				))}
			</div>
		</div>
	)
}

export default ProductsSlider
