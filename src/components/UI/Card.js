import './Card.css';
import React from 'react';

const Card = (props) => {
  const { className, children } = props;
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};
export default Card;
