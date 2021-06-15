import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const { date, amount } = props;

  // This returns a state variable, and a function to modify it.
  const [{ title }, setTitle] = useState(props);

  // OnClick handler function for the button , passed as a prop to the element.
  const clickHandler = () => {
    // This sets the title to Updated and also triggers a re render of the component.
    setTitle('Updated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={clickHandler} type="button">
        Update Title
      </button>
    </Card>
  );
};

export default ExpenseItem;
