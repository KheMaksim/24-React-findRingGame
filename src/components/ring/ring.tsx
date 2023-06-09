import './ring.css';

const Ring = (props: { guessed: boolean }) => {
	const ringClasses = props.guessed ? "ring guessed" : "ring";
	return <p className={ringClasses}>О</p>;
};

export default Ring;