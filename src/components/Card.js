import checkboxIcon from "../assests/Checkbox.svg";

function Card(props) {
    const displayDate = new Date(props.date).toDateString().substr(4)
    return (
        <div className="card h-cu-p">
            <div className="card-left d-f">
                <img src={checkboxIcon} alt="checkbox" />
            </div>
            <div className="card-right d-f jc-sb w-100" onClick={props.handleCardClick}>
                <div className="card-title ow-a w-70">{props.title}</div>
                <div className="card-date fw-b fs-0-7">{displayDate}</div>
            </div>
        </div>
    );
}

export default Card;