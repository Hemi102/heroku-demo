import React from 'react';
import {Modal, Button} from 'react-bootstrap';
import {X} from 'phosphor-react';
import './modal.scss';

// Default Modal is in lg size
const CustomModal = ({size = 'lg', show, onHide, heading, children, bsModalProps}) => {
  return (
    <Modal
      {...bsModalProps}
      show={show}
      onHide={onHide}
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <h3 className="modal-heading heading-h5">{heading}</h3>
        <Button onClick={onHide} className="close-icon-otr">
          <X size={24} />
        </Button>
      </Modal.Header>
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default CustomModal;
