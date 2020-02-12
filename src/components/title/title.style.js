import styled from 'styled-components';

const Title = styled.h1`
  font-family: Arial;
  font-weight: bold;
  font-size: ${({ small }) => small ? '14px': '24px'}
`;

export default Title;