import "./Input.css";

function Input(props) {
  return (
    <form className="input-box" onSubmit={props.handleFormSubmit}>
      <p className="label-text">Cardholder Name</p>
      <input
        className={props.nameErrorBorder ? "warning" : ""}
        type="text"
        placeholder="e.g. Jane Appleseed"
        value={props.name}
        onChange={props.handleCardName}
      />
      <p className="warning-text">{props.nameErrorText}</p>
      <p className="label-text">Card Number</p>
      <input
        className={props.numberErrorBorder ? "warning" : ""}
        type="text"
        placeholder="e.g. 1234 5678 9123 0000"
        maxLength={16}
        value={props.number}
        onChange={props.handleCardNumber}
      />
      <p className="warning-text">{props.numberErrorText}</p>
      <div className="input-date-cvc-box">
        <div className="input-date-box">
          <p className="label-text">Exp. Date (MM/YY)</p>
          <input
            className={props.monthErrorBorder ? "warning" : ""}
            type="number"
            placeholder="MM"
            value={props.month}
            onChange={props.handleCardMonth}
          />
          <input
            className={props.yearErrorBorder ? "warning" : ""}
            type="number"
            placeholder="YY"
            value={props.year}
            onChange={props.handleCardYear}
          />
          <p className="warning-text">{props.dateErrorText}</p>
        </div>
        <div className="input-cvc-box">
          <p className="label-text">CVC</p>
          <input
            className={`input-cvc ${props.cvcErrorBorder && "warning"}`}
            type="text"
            maxLength={3}
            placeholder="e.g. 123"
            value={props.cvc}
            onChange={props.handleCardCVC}
          />
          <p className="warning-text">{props.cvcErrorText}</p>
        </div>
      </div>
      <button>Confirm</button>
    </form>
  );
}

export default Input;
