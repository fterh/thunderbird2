// @flow

import React from 'react';

type Props = {
  id?: string,
  className?: string,
  children: any
};

const StatusItem = (props: Props) => {
  return (
    <span id={ props.id } className={ props.className }>
      { props.children }
    </span>
  );
};

export default StatusItem;