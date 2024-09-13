import { Star } from "../../assets/icons/Icons"

const containerStyle = {
	display: 'flex',
	alignItems: 'center',
	gap: '16px',
}

const starContainerStyle = {
	display: 'flex',
}


export default function StarRating({
	maxRating = 5,
	color = '#F1C66D',
	size = 24,
	className = '',
	messages = [],
    rating,
}) {
	const textStyle = {
		lineHeight: '1',
		margin: '0',
		color,
		fontSize: `${size / 1.5}px`,
	}

	return (
		<div style={containerStyle}>
			<div style={starContainerStyle} className={className}>
				{Array.from({ length: maxRating }, (_, i) => (
					<Star
						key={i}
						full={i < rating}
						color={color}
						size={size}
					/>
				))}
			</div>
			<p style={textStyle}>({messages})</p>
		</div>
	)
}
