import React from 'react';

const StatusItem = (props) => {
  return (
    <span id={ props.id } className={ props.className }>
      { props.children }
    </span>
  );
};

export default StatusItem;