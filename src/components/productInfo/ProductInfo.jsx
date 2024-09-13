function ProductInfo({ product, tooltipId}) {
	return (
		<div className="product-card__info">
			<h3 className="heading_3 mb-3">info</h3>
			<div
				className={`product-card__info--description product-card__info--description-${product.id}`}
				data-tooltip-id={tooltipId}
				data-tooltip-content={product.description}
				>
				<p>{product.description}</p>
			</div>
		</div>
	)
}

export default ProductInfo
