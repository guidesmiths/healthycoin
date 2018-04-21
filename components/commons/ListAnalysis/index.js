import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

export default props => {
  const { key, category, value } = props;
  return (
    <ListGroupItem>
      {key}
      {category}
      {value}
    </ListGroupItem>
  );
};
