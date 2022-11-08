import { useState } from "react";
import Attribution from "./components/Attribution";
import "./App.css";
import Card from "./components/Card";
import Input from "./components/Input";
import Confirmation from "./components/Confirmation";

function convertToCardFormat(str) {
  const newStr = str.trim().split("");
  for (let i = 0; i <= 16; i++) {
    if (i > 0 && i % 5 === 0) {
      newStr.splice(i - 1, 0, " ");
    }
  }
  return newStr.join("").trim();
}

function App() {
  const [formIsValid, setFormIsValid] = useState(false);

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberFront, setCardNumberFront] = useState("");
  const [cardMonth, setCardMonth] = useState("");
  const [cardMonthFront, setCardMonthFront] = useState("");
  const [cardYear, setCardYear] = useState("");
  const [cardCVC, setCardCVC] = useState("");

  const [nameErrorText, setNameErrorText] = useState("");
  const [numberErrorText, setNumberErrorText] = useState("");
  const [dateErrorText, setDateErrorText] = useState("");

  const [cvcErrorText, setCvcErrorText] = useState("");

  const [nameErrorBorder, setNameErrorBorder] = useState(false);
  const [numberErrorBorder, setNumberErrorBorder] = useState(false);
  const [monthErrorBorder, setMonthErrorBorder] = useState(false);
  const [yearErrorBorder, setYearErrorBorder] = useState(false);
  const [cvcErrorBorder, setCvcErrorBorder] = useState(false);

  const [nameIsValid, setNameIsValid] = useState(false);
  const [numberIsValid, setNumberIsValid] = useState(false);
  const [monthIsValid, setMonthIsValid] = useState(false);
  const [yearIsValid, setYearIsValid] = useState(false);
  const [cvcIsValid, setCvcIsValid] = useState(false);

  function handleCardName(event) {
    if (!/\d/.test(event.target.value) && event.target.value.length < 25) {
      setCardName(event.target.value);
    }
    if (
      event.target.value.trim().includes(" ") &&
      event.target.value.length > 4
    ) {
      setNameIsValid(true);
    } else {
      setNameIsValid(false);
    }
  }

  function handleCardNumber(event) {
    if (/^[0-9]*$/.test(event.target.value) && event.target.value.length < 17) {
      setCardNumber(event.target.value);
      setCardNumberFront(convertToCardFormat(event.target.value));
    }
    if (event.target.value.length === 16) {
      setNumberIsValid(true);
    } else {
      setNumberIsValid(false);
    }
  }

  function handleCardMonth(event) {
    if (
      event.target.value === "" ||
      (event.target.value > 0 &&
        event.target.value < 13 &&
        event.target.value.length < 3)
    ) {
      setCardMonth(event.target.value);
      if (event.target.value.length === 1) {
        setCardMonthFront(event.target.value.padStart(2, "0"));
      } else {
        setCardMonthFront(event.target.value);
      }
    }
    if (event.target.value > 0) {
      setMonthIsValid(true);
    } else {
      setMonthIsValid(false);
    }
  }

  function handleCardYear(event) {
    if (event.target.value === "" || event.target.value.length < 3) {
      setCardYear(event.target.value);
    }
    if (event.target.value > 21) {
      setYearIsValid(true);
    } else {
      setYearIsValid(false);
    }
  }

  function handleCardCVC(event) {
    if (
      event.target.value === "" ||
      (/^[0-9]*$/.test(event.target.value) && event.target.value.length < 4)
    ) {
      setCardCVC(event.target.value);
    }
    if (event.target.value.length === 3) {
      setCvcIsValid(true);
    } else {
      setCvcIsValid(false);
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (cardName === "") {
      setNameErrorText("Can't be blank");
      setNameErrorBorder(true);
    } else if (!cardName.trim().includes(" ") || cardName.length < 5) {
      setNameErrorText("Invalid input");
      setNameErrorBorder(true);
    } else {
      setNameErrorText("");
      setNameErrorBorder(false);
    }

    if (cardNumber === "") {
      setNumberErrorText("Can't be blank");
      setNumberErrorBorder(true);
    } else if (cardNumber.length < 16) {
      setNumberErrorText("Invalid input");
      setNumberErrorBorder(true);
    } else {
      setNumberErrorText("");
      setNumberErrorBorder(false);
    }

    if (cardMonth === "" || cardYear === "") {
      setDateErrorText("Can't be blank");
      setMonthErrorBorder(true);
    } else if (cardYear < 22) {
      setDateErrorText("Invalid input");
      setMonthErrorBorder(true);
    } else {
      setDateErrorText("");
      setMonthErrorBorder(false);
    }

    if (cardMonth === "") {
      setMonthErrorBorder(true);
    } else {
      setMonthErrorBorder(false);
    }

    if (cardYear === "" || cardYear < 22) {
      setYearErrorBorder(true);
    } else {
      setYearErrorBorder(false);
    }

    if (cardCVC === "") {
      setCvcErrorText("Can't be blank");
      setCvcErrorBorder(true);
    } else if (cardCVC.length < 3) {
      setCvcErrorText("Invalid input");
      setCvcErrorBorder(true);
    } else {
      setCvcErrorText("");
      setCvcErrorBorder(false);
    }

    if (
      numberIsValid &&
      cvcIsValid &&
      nameIsValid &&
      monthIsValid &&
      yearIsValid
    ) {
      setFormIsValid(true);
    }
  }

  function handleContinueButton() {
    setFormIsValid(false);
    setCardName("");
    setCardNumber("");
    setCardNumberFront("");
    setCardMonth("");
    setCardMonthFront("");
    setCardYear("");
    setCardCVC("");
    setNameIsValid(false);
    setNumberIsValid(false);
    setMonthIsValid(false);
    setYearIsValid(false);
    setCvcIsValid(false);
  }

  return (
    <main>
      <div className="container">
        <Card
          name={cardName}
          number={cardNumberFront}
          month={cardMonthFront}
          year={cardYear}
          cvc={cardCVC}
        />
        {!formIsValid && (
          <Input
            name={cardName}
            handleCardName={handleCardName}
            nameErrorText={nameErrorText}
            nameErrorBorder={nameErrorBorder}
            number={cardNumber}
            handleCardNumber={handleCardNumber}
            numberErrorText={numberErrorText}
            numberErrorBorder={numberErrorBorder}
            month={cardMonth}
            handleCardMonth={handleCardMonth}
            monthErrorBorder={monthErrorBorder}
            year={cardYear}
            handleCardYear={handleCardYear}
            yearErrorBorder={yearErrorBorder}
            dateErrorText={dateErrorText}
            cvc={cardCVC}
            handleCardCVC={handleCardCVC}
            cvcErrorText={cvcErrorText}
            cvcErrorBorder={cvcErrorBorder}
            handleFormSubmit={handleFormSubmit}
          />
        )}
        {formIsValid && (
          <Confirmation handleContinueButton={handleContinueButton} />
        )}
      </div>
      <Attribution />
    </main>
  );
}

export default App;
