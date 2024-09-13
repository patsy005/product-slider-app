import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { nextSlide, prevSlide } from '../../slices/ProductsSlice'

function SliderBtns({ className }) {
	const dispatch = useDispatch()

	const handleKeyDown = e => {
		if (e.key === 'ArrowRight') {
			dispatch(nextSlide())
		} else if (e.key === 'ArrowLeft') {
			dispatch(prevSlide())
		}
	}

	return (
		<div className={className}>
			<div className="product-card__btns mt-3 d-flex">
				<button
					className="product-card__btns--btn product-card__btns--prev-btn d-flex align-items-center justify-content-center"
					onClick={() => dispatch(prevSlide())}
					tabIndex="0"
					onKeyDown={handleKeyDown}
					aria-label="previous slide">
					&lt;
				</button>

				<button
					className="product-card__btns--btn product-card__btns--next-btn d-flex align-items-center justify-content-center"
					onClick={() => dispatch(nextSlide())}
					tabIndex="0"
					onKeyDown={handleKeyDown}
					aria-label="next slide">
					&gt;
				</button>

				<input type="hidden" tabIndex="0" />
			</div>
		</div>
	)
}

export default SliderBtns

SliderBtns.propTypes = {
	className: PropTypes.string,
}
