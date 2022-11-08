import "./Confirmation.css";
import iconComplete from "../images/icon-complete.svg";

function Confirmation(props) {
  return (
    <div className="confirmation-box">
      <img className="icon-complete" src={iconComplete} alt="icon complete" />
      <p className="thank-you">Thank you!</p>
      <p className="notification">We've added your card details</p>
      <button onClick={props.handleContinueButton}>Continue</button>
    </div>
  );
}

export default Confirmation;
