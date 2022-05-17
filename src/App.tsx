import { useEffect, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from './components/Modal';
import { api } from './services/api';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    api.get('transactions').then((res) => console.log(res.data));
  }, []);
  return (
    <div className='App'>
      <Header onOpenModal={handleOpenModal} />
      <Modal isModalOpen={isModalOpen} onRequestClose={handleCloseModal} />
      <Dashboard />
    </div>
  );
}

export default App;
