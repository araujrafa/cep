import React from 'react';
import Text from './text.style';

const TextComponent = (props) => (
  <Text {...props}>
    {props.children}
  </Text>
)

export default TextComponent;