import './resetbutton.css';

const ResetButton = ({ onClick, children }: { onClick: () => void, children: string }): JSX.Element => {
	return (
		<button
			className="button"
			onClick={onClick}
		>{children}</button>
	)
}

export default ResetButton;