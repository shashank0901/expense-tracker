import React, { useState } from "react";

import "./ExpenseForm.css";

import { useAuth0 } from "@auth0/auth0-react";

const ExpenseForm = (props) => {
  // const [enteredmail, setEnteredemail] = useState(user.email);
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // setEnteredemail()
  const { user, isAuthenticated } = useAuth0();

  {
    isAuthenticated && console.log(user.email);
  }
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let expenseData;
    {
      isAuthenticated &&
        (expenseData = {
          email: user.email,
          title: enteredTitle,
          amount: enteredAmount,
          date: new Date(enteredDate),
        });

      props.onSaveExpenseData(expenseData);
      //after i submit the form by clicking the Add expense button,
      // then print the object(in the console..just aise hi chk kr rha hu)
      // and clear the input fields
      console.log(expenseData);
      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        {/* <div className="budget"> */}
        {/* </div> */}
        <div className="new-expense__control">
          <label>Spent On</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={enteredDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
