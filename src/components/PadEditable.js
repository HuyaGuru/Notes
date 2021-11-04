import { useEffect, useState } from "react";

import {
	push,
	replace,
	cardListFunc,
} from "../features/cardList/cardListSlice";

import backIcon from "../assests/clear_white_48dp.svg";
import doneIcon from "../assests/done_black_48dp.svg";

import { useSelector } from "react-redux";
import { setCurrentCard } from "../features/currentCard";

const PadEditable = (props) => {
	const cards = useSelector(cardListFunc);
	const [padTitle, setPadTitle] = useState(cards[props.index].title);
	const [padText, setPadText] = useState(cards[props.index].text);
	useEffect(() => {
		setPadTitle(cards[props.index].title);
		setPadText(cards[props.index].text);
	}, [cards, props.index]);

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
			props.dispatch(setCurrentCard(cards.length));
		}
		props.handleDoneClick();
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
		<div className={`pad ${props.displayClass}`}>
			<div className="pad__top">
				<input
					type="text"
					className="pad__title pad__title__textarea"
					onChange={handleTitleChange}
					value={padTitle}
					size={padTitle.length - 4}
					maxLength="10"
				></input>
				<button className="btn btn--bg-orange300" onClick={props.handlePadHide}>
					<img
						src={backIcon}
						alt="close"
						className="btn__icon btn--opacity300"
					/>
				</button>
			</div>
			<div className="pad__writable">
				<textarea
					ref={props.textRef}
					className="pad__textarea"
					value={padText}
					onChange={handlePadTextChange}
				></textarea>
				<button className="btn btn__circle" onClick={handleOnClick}>
					<img src={doneIcon} alt="done" className="btn__icon" />
				</button>
			</div>
		</div>
	);
};

export default PadEditable;
