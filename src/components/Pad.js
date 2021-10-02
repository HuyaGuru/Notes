import backIcon from "../assests/arrow_back_ios_black_24dp 1.svg";
import editIcon from "../assests/edit_white_24dp 1.svg";

function Pad(props) {

    return (
        <div className={`pad ${props.displayClass}`}>
            <div className="pad-header">
                <button
                    className="d-f ai-c bgc-n c-p fs-1-1 h-c-s"
                    onClick={props.handlePadHide}
                >
                    <img src={backIcon} alt="back" />
                    <span>Back</span>
                </button>
                <input
                    className="pad-title ml-a bgc-n b-n o-n ta-c c-p fs-1-1 fw-b ls-0-01 br-0-5"
                    value={props.title}
                ></input>
            </div>
            <div className="h-90">
                <textarea
                    className="w-100 bgc-n b-1 c-p h-100 o-n br-0-5 p-1"
                    value={props.text}
                ></textarea>
            </div>
            <div className="bottom">
                    <button
                        className="button-circle h-cu-p"
                    >
                        <img src={editIcon} alt="edit" />
                    </button>
                </div>
        </div>
    );
}

export default Pad;