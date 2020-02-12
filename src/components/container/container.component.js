import React from 'react';
import Container from './container.styles';

const ContainerComponent = (props) => (
  <Container {...props}>{props.children}</Container>
) 

export default ContainerComponent;