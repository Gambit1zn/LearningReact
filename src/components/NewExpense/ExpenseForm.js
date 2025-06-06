import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount, setEnteredAmount] = useState('');
  // const [enteredDate, setEnteredDate] = useState('');

  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: ''
  });

  const titleChangeHandler = (event) => {
    // setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value
    // });
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value};
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: event.target.value};
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value};
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    userInput.date = new Date(userInput.date);
    props.onSaveExpenseData(userInput);
    setUserInput((prevState) => {
      return {
        title: '',
        amount: '',
        date: ''
      }
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type='text' value={userInput.title} onChange={titleChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type='number' value={userInput.amount} onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type='date' value={userInput.date} onChange={dateChangeHandler} min='2019-01-01' step='2022-12-31' />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;