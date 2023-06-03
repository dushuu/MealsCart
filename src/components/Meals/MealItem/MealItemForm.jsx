import React, { useRef,useState} from "react";
import classes from "./From.module.css";
import Input from "../../ui/Input/Input";

const MealItemForm = (props) => {
  const [AmountisValid , setAmountisValid] = useState(true)
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountisValid(false);
      return;
    }

    props.addcartHandler(enteredAmountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          defaultValue: "1",
          step: "1",
        }}
      />
      {!AmountisValid && <span>please enter valid amnt</span>}
      <button >Add</button>
      </form>
  );
};

export default MealItemForm;
