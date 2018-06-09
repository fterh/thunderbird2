import React from 'react';

const DataItem = (props) => {
  return (
    <h3 id={props.id} className={props.className}>
      {props[props.id]}
    </h3>
  );
};

export default DataItem;