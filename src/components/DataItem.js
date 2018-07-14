// @flow

import React from 'react';

type Props = {
  id?: string,
  className?: string,
  children: any
};

const DataItem = (props: Props) => {
  return (
    <h3 id={ props.id } className={ props.className }>
      { props.children }
    </h3>
  );
};

export default DataItem;