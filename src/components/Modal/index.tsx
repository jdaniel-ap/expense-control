import React, { FormEvent, useState } from 'react';
import ReactModal from 'react-modal';
import closeIcon from '../../assets/close.svg';
import incomeIcon from '../../assets/income.svg';
import outcomeIcon from '../../assets/outcome.svg';
import { api } from '../../services/api';

import { Button, Container } from './styles';

ReactModal.setAppElement('#root');

interface ModalProps {
  isModalOpen: boolean;
  onRequestClose: () => void;
}

interface TransactionData {
  category: string;
  amount?: number;
  title: string;
  type: 'deposit' | 'withdrawal';
}

function Modal({ isModalOpen, onRequestClose }: ModalProps) {
  const [transactionData, setTransactionData] = useState<TransactionData>({
    category: '',
    amount: undefined,
    title: '',
    type: 'deposit',
  });

  const saveTransactionData = async (event: FormEvent) => {
    event.preventDefault();

    api.post('/transactions', transactionData);
  };

  const handleCloseModal = () => {
    onRequestClose();
  };

  const handleTransactionData = ({
    currentTarget,
  }: FormEvent<HTMLInputElement>) => {
    const { name, value } = currentTarget;
    setTransactionData((state) => ({ ...state, [name]: value }));
  };
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      closeTimeoutMS={200}
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
    >
      <Container onSubmit={saveTransactionData}>
        <button className='react-modal-close' onClick={handleCloseModal}>
          <img className='close-btn' src={closeIcon} alt='Close modal' />
        </button>
        <h2>New Transaction</h2>
        <input
          name='title'
          type='text'
          placeholder='Title'
          onChange={handleTransactionData}
        />
        <input
          name='amount'
          type='number'
          placeholder='Amount'
          onChange={handleTransactionData}
        />
        <div className='button-group'>
          <Button
            type='button'
            isActive={transactionData.type === 'deposit'}
            activeColor='green'
            onClick={() =>
              setTransactionData((state) => ({ ...state, type: 'deposit' }))
            }
          >
            <img src={incomeIcon} alt='income' /> Income
          </Button>
          <Button
            type='button'
            isActive={transactionData.type === 'withdrawal'}
            activeColor='red'
            onClick={() =>
              setTransactionData((state) => ({ ...state, type: 'withdrawal' }))
            }
          >
            <img src={outcomeIcon} alt='outcome' />
            Outcome
          </Button>
        </div>
        <input
          name='category'
          type='text'
          placeholder='Category'
          onChange={handleTransactionData}
        />
        <button type='submit' className='add-task-btn'>
          Add
        </button>
      </Container>
    </ReactModal>
  );
}

export default Modal;
