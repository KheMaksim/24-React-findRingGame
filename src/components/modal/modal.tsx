import { ReactNode, useEffect, useState } from 'react';
import './modal.css'

const Modal = (props: { isOpen: boolean, onClose: () => void, children: ReactNode }) => {
	const [isVisible, setIsVisible] = useState(props.isOpen);

	useEffect(() => {
		setIsVisible(props.isOpen);
	}, [props.isOpen]);

	return (
		isVisible ? (
			<div className="modal">
				<div className="modal-content">
					{props.children}
				</div>
			</div>
		) : null
	);
};

export default Modal;