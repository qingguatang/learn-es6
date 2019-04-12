import React from 'react';

const Button = (props) => {
  // const type = props.type;
  // const children = props.children;
  const { type = 'default', size, rounded, children } = props;

  // const typeClass = type ? 'is-' + type : '';
  // const typeClass = `is-${type ? type : 'default'}`;
  // const typeClass = `is-${type || 'default'}`;
  const typeClass = `is-${type}`;

  // const sizeClass = size ? 'is-' + size : '';
  const sizeClass = size ? `is-${size}` : '';
  const roundedClass = rounded ? 'is-rounded' : '';

  // const cls = 'button ' + typeClass + ' ' + sizeClass;
  const cls = `button ${typeClass} ${sizeClass} ${roundedClass}`;
  return (
    <button className={cls}>{children}</button>
  )
};

const Button2 = ({
  type = 'default',
  size, rounded, children,
  onClick: onClickHandler,
  ...more
}) => {
  console.log(more);
  // const type = props.type;
  // const children = props.children;
  // const { type = 'default', size, rounded, children } = props;

  // const typeClass = type ? 'is-' + type : '';
  // const typeClass = `is-${type ? type : 'default'}`;
  // const typeClass = `is-${type || 'default'}`;
  const typeClass = `is-${type}`;

  // const sizeClass = size ? 'is-' + size : '';
  const sizeClass = size ? `is-${size}` : '';
  const roundedClass = rounded ? 'is-rounded' : '';

  // const cls = 'button ' + typeClass + ' ' + sizeClass;
  const cls = `button ${typeClass} ${sizeClass} ${roundedClass}`;
  return (
    <button {...more} onClick={onClickHandler} className={cls}>{children}</button>
  )
};
export default Button2;