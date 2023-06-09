import { ReactNode } from 'react';
import './square.css'

const Square = (props: { index: number; toggled: boolean; children: ReactNode; toggleSquare: (index: number) => void; }) => {
	const squareClasses = props.toggled ? "square toggled" : "square";
	const onClickHandler = () => {
		props.toggleSquare(props.index);
	};
	return (
		<div className={squareClasses} onClick={onClickHandler}>
			{props.children}
		</div>
	);
};

export default Square;