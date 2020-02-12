import React from 'react';
import Modal from './modal.styles';

const ModalComponent = ({ show, handleClose, children }) => (
  <Modal show={show}>
    <Modal.Close
      onClick={handleClose}
    > x
    </Modal.Close>
    {children}
  </Modal>
)

export default ModalComponent;