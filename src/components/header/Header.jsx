import { DotIcon } from '../../assets/icons/Icons'
import PropTypes from 'prop-types'

function Header({ className, product }) {
	return (
		<div className={`col-12 order-0 z-2 ${className}`}>
			<div className="product-card__header d-flex gap-4">
				<p className="appTitle">slider app</p>
				<div className="breadcrumbs d-flex">
					<p className="shop">Shop</p>
					<span>
						<DotIcon />
					</span>
					<p className="category">{product.category}</p>
				</div>
			</div>
		</div>
	)
}

Header.propTypes = {
	className: PropTypes.string,
}

export default Header
