import lineIcon from "../assests/Divider_Line.svg";


function Divider(props) {
    return (
        <div className="divider">
            <p className="divider-text">{props.text}</p>
            <img className="line" src={lineIcon} alt="line" />
        </div>
    );
}

export default Divider;