import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ primary }) => primary && '#50a5de'};
  border: 0;
  border-radius: 2px;
  color: ${({ primary }) => primary && '#fff'};
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  padding: 5px 15px;
`;

export default Button;