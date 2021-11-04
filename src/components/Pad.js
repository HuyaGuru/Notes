import backIcon from "../assests/clear_white_48dp.svg";
import editIcon from "../assests/edit_black_48dp.svg";

function Pad(props) {
	return (
		<div className={`pad ${props.displayClass}`}>
			<div className="pad__top">
				<span className="pad__title">
					{props.title}
					<button className="btn" onClick={props.handlePadHide}>
						<img
							src={backIcon}
							alt="close"
							className="btn__icon btn--opacity300"
						/>
					</button>
				</span>
			</div>
			<div className="pad__writable">
				<div>{props.text}</div>
				<button
					className="btn btn__circle"
					onClick={props.handleEditClick}
				>
					<img src={editIcon} alt="edit" className="btn__icon"/>
				</button>
			</div>
		</div>
	);
}

export default Pad;
