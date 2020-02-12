import styled from 'styled-components';
import Container from '../container/container.component';

const Modal = styled(Container)`
  display: ${({ show }) => !show && 'none'};
`;

Modal.Close = styled.a`
  cursor: pointer;
  float: right;
  font-family: 'Arial';
`;

export default Modal;