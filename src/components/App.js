import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { cardListFunc, splice } from "../features/cardList/cardListSlice";
import { currentCardFunc, setCurrentCard } from "../features/currentCard";

import Card from "./Card";
import Pad from "./Pad";
import PadEditable from "./PadEditable";

import addIcon from "../assests/add_black_24dp 1.svg";
import deleteIcon from "../assests/delete_white_50.svg";

import "./App.css";

function App() {
	const cards = useSelector(cardListFunc);
	const currCard = useSelector(currentCardFunc);
	const dispatch = useDispatch();

	const [padShow, setPadShow] = useState(false);
	const [padEditableShow, setPadEditableShow] = useState(false);
	const [edit, setEdit] = useState(false);
	const [checkList, setCheckList] = useState([])

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
	const handleDoneClick = () => {
		if(edit){
			setEdit(false)
		}
		setPadEditableShow(false)
		setPadShow(true)
	}
	const handleDeleteClick = () => {
		const sortedCheckList = checkList.slice()
		sortedCheckList.sort()
		console.log(sortedCheckList)
		dispatch(splice({pos:sortedCheckList[0],length:sortedCheckList.length}))
	}

	const displayPadClass = padShow ? "d-f" : "";
	const displayPadEditableClass = padEditableShow ? "d-f" : "";

	return (
		<div className="main-grid">
			<div className="nav">
				<div className="top">
					<div className="Brand">notes</div>
					<button className={`top-delete d-b`} onClick={handleDeleteClick}>
						<img src={deleteIcon} alt="delete" />
					</button>
				</div>
				<div className="cards">
				{cards.map((x, index) => {
					if (index > 0) {
						return (
							<Card
								title={x.title}
								date={x.date}
								handleCardClick={handlePadShow}
								index={index}
								key={index}
								setCheckList={setCheckList}
								checkList={checkList}
							/>
						);
					} else {
						return null;
					}
				})}
				</div>
				<div className="bottom">
					<button
						className="button-circle h-cu-p"
						onClick={handleAddClick}
					>
						<img src={addIcon} alt="new" />
					</button>
				</div>
			</div>
			<Pad
				displayClass={displayPadClass}
				handlePadHide={handlePadHide}
				title={cards[currCard].title}
				text={cards[currCard].text}
				handleEditClick={handlePadEditClick}
			/>
			<PadEditable
				displayClass={displayPadEditableClass}
				handlePadHide={handlePadEditableHide}
				textRef={padEditableTextRef}
				dispatch={dispatch}
				edit={edit}
				index={currCard}
				handleDoneClick={handleDoneClick}
			/>
		</div>
	);
}

export default App;
