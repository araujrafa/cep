import React from 'react';
import Button from './button.styles';

const ButtonComponent = (props) => (
  <Button
    {...props}
  >
    {props.children}
  </Button>
);

export default ButtonComponent;