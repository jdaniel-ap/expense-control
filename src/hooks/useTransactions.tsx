import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { api } from '../services/api';
import { TransactionData } from '../types';

interface AppContextProviderProps {
  children: ReactNode;
}

type TransactionInput = Omit<TransactionData, 'id' | 'createdAt'>;

interface TransactionContextValues {
  transactions: TransactionData[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const AppContext = createContext<TransactionContextValues>(
  {} as TransactionContextValues
);

export function AppContextProvider({ children }: AppContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  const createTransaction = async (transactionInput: TransactionInput) => {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;
    setTransactions((state) => [...state, transaction]);
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

export const useTransactions = () => {
  const context = useContext(AppContext);

  return context;
};
