import checkboxIcon from "../assests/Checkbox.svg";

function Card(props) {
	const displayDate = new Date(props.date).toDateString().substr(4);
	return (
		<div className="card h-cu-p">
			<div className="card-left d-f">
				<img src={checkboxIcon} alt="checkbox" />
			</div>
			<button
				className="card-right d-f jc-sb w-100 ta-l"
				onClick={props.handleCardClick}
				data-index={props.index}
			>
				<div className="card-title ow-a w-70" data-index={props.index}>
					{props.title}
				</div>
				<div className="card-date fw-b fs-0-7" data-index={props.index}>
					{displayDate}
				</div>
			</button>
		</div>
	);
}

export default Card;
