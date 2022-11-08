import "./Card.css";
import cardLogo from "../images/card-logo.svg";

function Card(props) {
  return (
    <div className="card-box">
      <div className="card-front-box">
        <div className="card-front-info">
          <img src={cardLogo} alt="card logo" className="card-logo" />
          <p className="card-number">{props.number || "0000 0000 0000 0000"}</p>
          <div className="card-name-date">
            <p className="card-name">{props.name || "Jane Appleseed"}</p>
            <p className="card-date">
              <span className="card-month">{props.month || "00"}</span>/
              <span className="card-year">{props.year || "00"}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="card-back-box">
        <p className="card-cvc">{props.cvc || "000"}</p>
      </div>
    </div>
  );
}

export default Card;
