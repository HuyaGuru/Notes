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
			<div className="card__first">
					<input
						type="checkbox"
						id={props.index}
						ref={checkboxRef}
						onClick={handleCheckboxClick}
					/>
				<label htmlFor={props.index} className="w-100">
					<button
						className="btn card__text"
						onClick={props.handleCardClick}
						data-index={props.index}
					>
						{props.title}
					</button>
				</label>
			</div>
			<div
				className="card__date"
				data-index={props.index}
			>
				{displayDate}
			</div>
		</div>
	);
}

export default Card;
