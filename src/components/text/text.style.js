import styled from 'styled-components';

const Text = styled.p`
  color: ${({ gray }) => gray && '#9b9b9b'};
  font-family: Arial;
  font-size: 14px;
`

export default Text;
