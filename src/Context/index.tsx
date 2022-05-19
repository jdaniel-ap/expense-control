import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { TransactionData } from '../types';

interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContext = createContext<TransactionData[]>([]);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <AppContext.Provider value={transactions}>{children}</AppContext.Provider>
  );
}
