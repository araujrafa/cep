import React from 'react';
import Title from './title.style';

const TitleComponent = (props) => (
  <Title {...props}>{props.children}</Title>
);

export default TitleComponent;