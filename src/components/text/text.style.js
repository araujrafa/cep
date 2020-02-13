import styled from 'styled-components';

const Text = styled.p`
  color: ${({ gray }) => gray && '#9b9b9b'};
  font-family: Arial;
  font-size: ${({ small }) => small ? '10px' : '14px'};
  margin: ${({ small }) => small && 0};
`

export default Text;
