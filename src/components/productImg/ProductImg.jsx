function ProductImg({ product }) {
	return (
		<div className="product-card__img-container">
			<img src={product.image} alt={product.title} className="" />
		</div>
	)
}

export default ProductImg
