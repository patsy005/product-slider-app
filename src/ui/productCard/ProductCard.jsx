import { useEffect, useMemo, useState } from 'react'
import AddToCartBtn from '../../components/addToCartBtn/AddToCartBtn'
import Header from '../../components/header/Header'
import SliderBtns from '../../components/sliderBtns/SliderBtns'
import { Tooltip as ReactTooltip } from 'react-tooltip'
import ProductInfo from '../../components/productInfo/ProductInfo'
import ProductRating from '../../components/productRating/ProductRating'
import ProductImg from '../../components/productImg/ProductImg'
import ProductTitle from '../../components/productTitle/ProductTitle'
import Thumbnail from '../../components/thumbnail/Thumbnail'
import { useSelector } from 'react-redux'

function ProductCard({ product, className, tooltipFn }) {
	const tooltipId = useMemo(() => `description-tooltip-${product.id}`, [product.id])
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768)
	const currentIndex = useSelector(state => state.products.currentIndex)

	useEffect(() => {
		window.addEventListener('resize', () => {
			setIsSmallScreen(window.innerWidth < 768)
		})

		return () => {
			window.removeEventListener('resize', () => {
				setIsSmallScreen(window.innerWidth < 768)
			})
		}
	}, [])

	return (
		<>
			{product && (
				<div className={className} aria-label={`Product number ${currentIndex}`}>
					<div className="row p-5">
						<div className="product-card d-flex justify-content-center">
							<div className="product-card__left-box col-md-1 p-4 p-xxl-5 d-md-flex align-items-end justify-content-center">
								<Thumbnail className="d-none d-md-block" />
							</div>
							<div className="product-card__right-box col-12 col-md-11 d-flex flex-column flex-md-row">
								<Header className="header-mobile p-4" product={product} />
								<div className="col-12 col-md-7 order-2 order-md-1 p-4 p-xxl-5 d-flex flex-column justify-content-between gap-3 z-2">
									<Header className="header-desktop p-0" product={product} />
									<Thumbnail className="d-block d-md-none" />
									<ProductTitle product={product} />

									<ProductInfo product={product} tooltipId={tooltipId} />
									{!isSmallScreen && (
										<ReactTooltip
											className="custom-tooltip z-2"
											id={tooltipId}
											place="bottom"
											effect="solid"
											afterHide={() => tooltipFn(false)}
											afterShow={() => tooltipFn(true)}
										/>
									)}
									<ProductRating product={product} />

									<SliderBtns className="slider-btns-mobile" />
									<AddToCartBtn />
									<SliderBtns className="slider-btns-desktop" />
								</div>

								<div className="col-12 col-md-5 order-1 order-md-2">
									<ProductImg product={product} />
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}

export default ProductCard
