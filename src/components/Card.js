import { useEffect, useRef } from "react";

import "./Card.css";

function Card(props) {
	const displayDate = new Date(props.date).toDateString().substr(4);
	const checkboxRef = useRef();

	useEffect(() => {
		if (props.reset) {
			checkboxRef.current.checked = false;
			props.setReset(false);
		}
	});

	const handleCheckboxClick = () => {
		if (checkboxRef.current.checked) {
			props.setCheckList([...props.checkList, props.index]);
		} else {
			const tempCheckList = props.checkList.slice();
			const toBeRemoved = tempCheckList.indexOf(props.index);
			tempCheckList.splice(toBeRemoved, 1);
			props.setCheckList(tempCheckList);
		}
	};
	return (
		<div className="card">
			<div className="d-f w-100 ai-c ">
				<input
					type="checkbox"
					id={props.index}
					ref={checkboxRef}
					onClick={handleCheckboxClick}
				/>
				<label for={props.index} className="w-100">
					<button
						className="card-title ow-a w-100 h-cu-p"
						onClick={props.handleCardClick}
						data-index={props.index}
					>
						{props.title}
					</button>
				</label>
			</div>
			<div
				className="card-date fw-b fs-0-7 h-cu-p"
				data-index={props.index}
			>
				{displayDate}
			</div>
		</div>
	);
}

export default Card;
