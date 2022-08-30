import React, {useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';



const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <div className='expense-item__description'>
        <ExpenseDate date={props.date}></ExpenseDate>
        <h2>{title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;