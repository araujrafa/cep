import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ gray }) => gray && '#ededed'};
  padding: 20px;
  margin: 0 auto;
  max-width: 600px;
`;

export default Container;