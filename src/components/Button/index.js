import React from 'react'
import './style.scss';


// function Button(props) {

// }

const Button = (props) => {
  // const type = props.type;
  // const shape = props.shape;
  const { type = 'default', shape, children, onClick } = props;

  const typeClass = `type-${type}`;
  const shapeClass = shape ? `shape-${shape}` : '';
  const cls = `${typeClass} ${shapeClass}`;
  return (
    <button className={cls} type="button" onClick={onClick}>{children}</button>
  )
};

export default Button;
