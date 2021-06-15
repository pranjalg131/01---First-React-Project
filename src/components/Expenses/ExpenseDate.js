import './ExpenseDate.css';
import React from 'react';

const ExpenseDate = (props) => {
  const { date } = props;

  const month = date.toLocaleString('en-IN', {
    month: 'long',
  });
  const day = date.toLocaleString('en-IN', {
    day: '2-digit',
  });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpenseDate;
