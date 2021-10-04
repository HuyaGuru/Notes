import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cardListFunc } from "../features/cardList/cardListSlice";

import Card from "./Card";
import Pad from "./Pad";
import PadEditable from "./PadEditable";

import addIcon from "../assests/add_black_24dp 1.svg";
import deleteIcon from "../assests/delete_white_50.svg";

import "./App.css";

function App() {
	const cards = useSelector(cardListFunc);
	const dispatch = useDispatch();

	const [padShow, setPadShow] = useState(false);
	const [padEditableShow, setPadEditableShow] = useState(false);
	const [currentCard, setCurrentCard] = useState(0);
	const [edit, setEdit] = useState(false);

	const padEditableTextRef = useRef();

	useEffect(() => {
		padEditableTextRef.current.focus();
	}, [padEditableShow]);

	const handlePadShow = (e) => {
		setCurrentCard(e.target.dataset.index);
		setPadEditableShow(false);
		setPadShow(true);
	};
	const handleAddClick = () => {
		setCurrentCard(0);
		setPadEditableShow(true);
		setPadShow(false);
	};
	const handlePadHide = () => {
		setPadShow(false);
	};
	const handlePadEditableHide = () => {
		setEdit(false);
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
				{cards.map((x, index) => {
					if (index > 0) {
						return (
							<Card
								title={x.title}
								date={x.date}
								handleCardClick={handlePadShow}
								index={index}
								key={index}
							/>
						);
					}
					else{
						return null
					}
				})}
				<div className="bottom">
					<button className="button-circle h-cu-p" onClick={handleAddClick}>
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
				dispatch={dispatch}
				edit={edit}
				index={currentCard}
			/>
		</div>
	);
}

export default App;
