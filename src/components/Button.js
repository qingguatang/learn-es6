import React from 'react';

const Button = (props) => {
  // const type = props.type;
  // const children = props.children;
  const { type, size, children } = props;

  const typeClass = type ? 'is-' + type : '';
  const sizeClass = size ? 'is-' + size : '';
  const cls = 'button ' + typeClass + ' ' + sizeClass;
  return (
    <button className={cls}>{children}</button>
  )
};

export default Button;