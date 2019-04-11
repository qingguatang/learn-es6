import React from 'react'
import cx from 'classnames';
import './style.scss';


// function Button(props) {

// }

const Button = (props) => {
  // const type = props.type;
  // const shape = props.shape;
  const {
    type = 'default', size, rounded,
    children, onClick,
    ...more
  } = props;
  console.log('more', more);

  const typeClass = `is-${type}`;
  const sizeClass = size ? `is-${size}` : '';
  const roundClass = rounded ? 'is-rounded' : '';
  const cls = `button ${typeClass} ${sizeClass} ${roundClass}`;
  return (
    <button className={cls} type="button" onClick={onClick} {...more}>{children}</button>
  )
};


const Button2 = ({
  type = 'default', size, rounded,
  children, onClick,
  ...more
}) => {
  const cls = cx(
    'button',
    `is-${type}`,
    { size: `is-${size}`, rounded }
  );
  return (
    <button className={cls} type="button" onClick={onClick} {...more}>{children}</button>
  )
};

export default Button2;
