import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className='App'>
      <Header onOpenModal={handleOpenModal} />
      <Modal isModalOpen={isModalOpen} onRequestClose={handleCloseModal} />
      <Dashboard />
    </div>
  );
}

export default App;
