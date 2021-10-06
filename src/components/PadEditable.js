import { useEffect, useState } from "react";

import { push, replace, cardListFunc } from "../features/cardList/cardListSlice";

import backIcon from "../assests/arrow_back_ios_black_24dp 1.svg";
import doneIcon from "../assests/done_white_24dp 1.svg";
import { useSelector } from "react-redux";

function PadEditable(props) {
	const cards = useSelector(cardListFunc);

	const [padTitle, setPadTitle] = useState(cards[props.index].title);
	const [padText, setPadText] = useState(cards[props.index].text);

	useEffect(()=> {
		setPadTitle(cards[props.index].title)
		setPadText(cards[props.index].text)
	},[cards, props.index])

	const handleOnClick = () => {
		if (props.edit) {
			props.dispatch(
				replace({
					index: props.index,
					title: padTitle,
					text: padText,
					date: date,
				})
			);
		} else {
			props.dispatch(
				push({ title: padTitle, date: date, text: padText })
			);
		}
		props.handleDoneClick()
	};
	const handleTitleChange = (e) => {
		setPadTitle(e.target.value);
	};
	const handlePadTextChange = (e) => {
		setPadText(e.target.value);
	};

	function giveDate() {
		const time = new Date();
		return [time.getFullYear(), time.getMonth() + 1, time.getDate()];
	}
	const date = giveDate();

	return (
		<div className={`pad ${props.displayClass} bgc-custom`}>
			<div className="pad-header">
				<button
					className="d-f ai-c bgc-n c-p fs-1-1 h-c-s h-cu-p"
					onClick={props.handlePadHide}
				>
					<img src={backIcon} alt="back" />
					<span>Back</span>
				</button>
				<input
					className="pad-title ml-a bgc-n b-n o-n ta-c c-p fs-1-1 fw-b ls-0-01 br-0-5"
					onChange={handleTitleChange}
					value={padTitle}
				></input>
				<button
					className="ml-a d-f ai-c bgc-n c-p fs-1-1 h-c-s cg-0-3 h-cu-p"
					onClick={handleOnClick}
				>
					<span>Done</span>
					<img src={doneIcon} alt="done" />
				</button>
			</div>
			<div className="h-90">
				<textarea
					ref={props.textRef}
					className="w-100 bgc-n b-1 c-p h-100 o-n br-0-5 p-1"
					value={padText}
					onChange={handlePadTextChange}
				></textarea>
			</div>
		</div>
	);
}

export default PadEditable;
