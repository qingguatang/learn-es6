import React from 'react'
import cx from 'classnames';
import './style.scss';


// function Button(props) {

// }

const Button = (props) => {
  // const type = props.type;
  // const shape = props.shape;
  const {
    type = 'default', shape, children, onClick,
    ...more
  } = props;
  console.log('more', more);

  const typeClass = `type-${type}`;
  const shapeClass = shape ? `shape-${shape}` : '';
  const cls = `${typeClass} ${shapeClass}`;
  return (
    <button className={cls} type="button" onClick={onClick} {...more}>{children}</button>
  )
};


const Button2 = ({
  type = 'default',
  shape, children, onClick,
  ...more
}) => {
  const cls = cx(
    `type-${type}`,
    { shape: `shape-${shape}` }
  );
  return (
    <button className={cls} type="button" onClick={onClick} {...more}>{children}</button>
  )
};

export default Button2;
