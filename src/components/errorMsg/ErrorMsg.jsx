function ErrorMsg({ message }) {
	return (
		<div className="row">
			<div className="error-container">
				<p className="error-msg">{message}</p>
			</div>
		</div>
	)
}

export default ErrorMsg
