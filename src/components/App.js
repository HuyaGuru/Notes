import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { cardListFunc } from "../features/cardList/cardListSlice";

import Card from "./Card";
import Pad from "./Pad";
import PadEditable from "./PadEditable";

import addIcon from "../assests/add_black_24dp 1.svg";
import deleteIcon from "../assests/delete_white_50.svg";

import "./App.css";

function App() {
	const cards = useSelector(cardListFunc);

	const [padShow, setPadShow] = useState(false);
	const [padEditableShow, setPadEditableShow] = useState(false);
	const [currentCard, setCurrentCard] = useState(0);
	const [edit, setEdit] = useState(false);

	const padEditableTextRef = useRef();
	const padEditableTitleRef = useRef()

	useEffect(() => {
		padEditableTextRef.current.focus();
	}, [padEditableShow]);
	useEffect(() => {
		padEditableTextRef.current.defaultValue = cards[currentCard].text;
		padEditableTitleRef.current.defaultValue = cards[currentCard].title;
	}, [edit,cards,currentCard]);

	const handlePadShow = (e) => {
		setCurrentCard(e.target.dataset.index);
		setPadEditableShow(false);
		setPadShow(true);
	};
	const handlePadEditableClick = () => {
		setPadEditableShow(true);
		setPadShow(false);
	};
	const handlePadHide = () => {
		setPadShow(false);
	};
	const handlePadEditableHide = () => {
		setPadEditableShow(false);
	};
	const handlePadEditClick = () => {
		setEdit(true);
		setPadShow(false);
		setPadEditableShow(true);
	};

	const displayPadClass = padShow ? "d-f" : "";
	const displayPadEditableClass = padEditableShow ? "d-f" : "";

	return (
		<div className="main-grid">
			<div className="nav">
				<div className="top">
					<div className="Brand">notes</div>
					<button className="top-delete">
						<img src={deleteIcon} alt="delete" />
					</button>
				</div>
				{cards.map((x, index) => (
					<Card
						title={x.title}
						date={x.date}
						handleCardClick={handlePadShow}
						index={index}
						key={index}
					/>
				))}
				<div className="bottom">
					<button
						className="button-circle"
						onClick={handlePadEditableClick}
					>
						<img src={addIcon} alt="new" />
					</button>
				</div>
			</div>
			<Pad
				displayClass={displayPadClass}
				handlePadHide={handlePadHide}
				title={cards[currentCard].title}
				text={cards[currentCard].text}
				handleEditClick={handlePadEditClick}
			/>
			<PadEditable
				displayClass={displayPadEditableClass}
				handlePadHide={handlePadEditableHide}
				textRef={padEditableTextRef}
				titleRef={padEditableTitleRef}
			/>
		</div>
	);
}

export default App;
