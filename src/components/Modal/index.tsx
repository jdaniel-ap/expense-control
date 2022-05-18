import React, { useState } from 'react';
import ReactModal from 'react-modal';
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';

import { Button, Container } from './styles';

ReactModal.setAppElement('#root');

interface ModalProps {
  isModalOpen: boolean;
  onRequestClose: () => void;
}

function Modal({ isModalOpen, onRequestClose }: ModalProps) {
  const [type, setType] = useState('');

  const handleCloseModal = () => {
    setType('');
    onRequestClose();
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      closeTimeoutMS={200}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container onSubmit={(event) => event.preventDefault()}>
        <button className='react-modal-close' onClick={handleCloseModal}>
          <img className='close-btn' src={closeIcon} alt='Close modal' />
        </button>
        <h2>New Transaction</h2>
        <input type='text' placeholder='Title' />
        <input type='number' placeholder='Amount' />
        <div className='button-group'>
          <Button
            isActive={type === 'deposit'}
            activeColor='green'
            onClick={() => setType('deposit')}
          >
            <img src={incomeIcon} alt='income' /> Income
          </Button>
          <Button
            isActive={type === 'withdrawal'}
            activeColor='red'
            onClick={() => setType('withdrawal')}
          >
            <img src={outcomeIcon} alt='outcome' />
            Outcome
          </Button>
        </div>
        <input type='text' placeholder='Category' />
        <button type='submit' className='add-task-btn'>
          Add
        </button>
      </Container>
    </ReactModal>
  );
}

export default Modal;
