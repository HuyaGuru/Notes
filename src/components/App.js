// imports from libraries
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// custom redux imports
import { cardListFunc, splice } from "../features/cardList/cardListSlice";
import { currentCardFunc, setCurrentCard } from "../features/currentCard";

// custom react component imports
import Card from "./Card";
import Pad from "./Pad";
import PadEditable from "./PadEditable";

// icons
import addIcon from "../assests/add_black_24dp 1.svg";
import deleteIcon from "../assests/delete_white_50.svg";

// stylesheet
import "./App.css";

const App = () => {
	const cards = useSelector(cardListFunc);
	const currCard  = useSelector(currentCardFunc);

	const dispatch = useDispatch();

	const [padShow, setPadShow] = useState(false);
	const [padEditableShow, setPadEditableShow] = useState(false);
	const [edit, setEdit] = useState(false);
	const [checkList, setCheckList] = useState([]);
	const [reset, setReset] = useState(false);

	const padEditableTextRef = useRef();
	const deferredEvent 	 = useRef();
	const installButton 	 = useRef();

	useEffect(() => {
		padEditableTextRef.current.focus();
	}, [padEditableShow]);

	const handlePadShow = (e) => {
		dispatch(setCurrentCard(e.target.dataset.index));
		setPadEditableShow(false);
		setPadShow(true);
	};
	const handleAddClick = () => {
		dispatch(setCurrentCard(0));
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
		if (edit) {
			setEdit(false);
		}
		setPadEditableShow(false);
		setPadShow(true);
	};
	const handleDeleteClick = () => {
		const sortedCheckList = checkList.slice();
		sortedCheckList.sort();
		dispatch(
			splice({ pos: sortedCheckList[0], length: sortedCheckList.length })
		);
		setCheckList([]);
		if (sortedCheckList.indexOf(currCard) !== null) {
			setPadShow(false);
		}
		dispatch(setCurrentCard(0));
		setReset(true);
	};
	
	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (e) => {
			deferredEvent.current = e;
			installButton.current = true;
		});
	});
	const platform =
		navigator.userAgent.includes("Firefox") &&
		navigator.userAgent.includes("Mobile")
			? "Firefox Mobile"
			: "";
	console.log(navigator.userAgent)
	const handleInstallClick = async () => {
		if (platform === "Firefox Mobile") {
			window.alert(
				"Looks like you are using Firefox Mobile. Sorry, this browser isn't supported for this feature.\nYou can follow these steps to do the same:\n1. Go to options menu on the right side of the url bar.\n2. there you would see an 'install' button, press it\n3. done!"
			);
		}
		else if (deferredEvent.current !== null) {
			deferredEvent.current.prompt();
			const { outcome } = await deferredEvent.current.userChoice;
			if (outcome === "accepted") {
				deferredEvent.current = null;
				installButton.current = false;
			}
		}
	};

	const displayPadClass = padShow ? "d-f" : "";
	const displayPadEditableClass = padEditableShow ? "d-f" : "";
	const displayInstallButton = installButton.current ? "d-b" : "";

	return (
		<div className="main-grid">
			<div className="nav">
				<div className="top">
					<span className="Brand">notes</span>
					<button
						className={`install-button h-cu-p ${displayInstallButton}`}
						onClick={handleInstallClick}
					>
						install
					</button>
					<button
						className={`top-delete d-b`}
						onClick={handleDeleteClick}
					>
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
									reset={reset}
									setReset={setReset}
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
};

export default App;
