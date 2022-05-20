import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';
import { TransactionData } from '../types';

interface AppContextProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<TransactionData, 'id' | 'createdAt'>;

interface TransactionContextValues {
  transactions: TransactionData[];
  createTransaction: (transaction: TransactionInput) => void;
}

export const AppContext = createContext<TransactionContextValues>(
  {} as TransactionContextValues
);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  const createTransaction = (transaction: TransactionInput) => {
    api.post('/transactions', transaction);
  };

  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <AppContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </AppContext.Provider>
  );
}
