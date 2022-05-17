import React from 'react';
import ReactModal from 'react-modal';
import { Container } from './styles';

ReactModal.setAppElement('#root');

interface ModalProps {
  isModalOpen: boolean;
  onRequestClose: () => void;
}

function Modal({ isModalOpen, onRequestClose }: ModalProps) {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container>
        <h2>New Transaction</h2>
        <input type='text' placeholder='Title' />
        <input type='number' placeholder='Amount' />
        <input type='text' placeholder='category' />
        <button type='submit'>Add</button>
      </Container>
    </ReactModal>
  );
}

export default Modal;
