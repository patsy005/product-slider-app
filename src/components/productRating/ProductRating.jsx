import StarRating from "../starRating/StarRating"

function ProductRating({ product }) {
	return (
		<div className="product-card__rating mb-3 d-flex flex-column align-items-start">
			<div className="product-card__rating--top d-flex gap-3 align-items-center justify-items-center">
				<h3 className="heading_3 mb-3">rating</h3>
				<p className="mb-3">{product.rating.rate}</p>
			</div>
			<StarRating messages={product.rating.count} rating={product.rating.rate} />
		</div>
	)
}

export default ProductRating
