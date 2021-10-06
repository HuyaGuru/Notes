import { useRef } from "react";

import './Card.css'

function Card(props) {
	const displayDate = new Date(props.date).toDateString().substr(4);
	const checkboxRef = useRef();
	const handleCheckboxClick = () => {
		if (checkboxRef.current.checked) {
			props.setCheckList([...props.checkList, props.index]);
		}
	};
	return (
		<div className="card">
			<div
				className="card-date fw-b fs-0-7 h-cu-p"
				data-index={props.index}
			>
				{displayDate}
			</div>
			<div className="d-f w-100">
				<input
					type="checkbox"
					id={props.index}
					name="selectiion"
					ref={checkboxRef}
					onClick={handleCheckboxClick}
				/>
				<button
					className="card-title ow-a w-70 h-cu-p"
					onClick={props.handleCardClick}
					data-index={props.index}
				>
					{props.title}
				</button>
			</div>
		</div>
	);
}

export default Card;
