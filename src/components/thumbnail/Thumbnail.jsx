import { useSelector } from 'react-redux'

function Thumbnail({ className = '' }) {
	const products = useSelector(state => state.products.products)
	const currentIndex = useSelector(state => state.products.currentIndex)

	return (
		<>
			{products.length && (
				<div className={`thumbnail ${className}`}>
					<p>
						<span className="current">{currentIndex + 1}</span>/<span className="length">{products.length}</span>
					</p>
				</div>
			)}
		</>
	)
}

export default Thumbnail
