import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import Modal from './components/Modal';
import { AppContextProvider } from './context';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <AppContextProvider>
      <Header onOpenModal={handleOpenModal} />
      <Modal isModalOpen={isModalOpen} onRequestClose={handleCloseModal} />
      <Dashboard />
    </AppContextProvider>
  );
}

export default App;
