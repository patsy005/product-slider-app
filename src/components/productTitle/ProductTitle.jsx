function ProductTitle({ product }) {
	return (
		<div className="product-card__title">
			<h2 className="product-title">
				{product.title}
			</h2>
			<p className="product-price"> ${product.price}</p>
		</div>
	)
}

export default ProductTitle
