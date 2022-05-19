export interface TransactionData {
  id?: number;
  category: string;
  amount: number;
  title: string;
  type: 'deposit' | 'withdrawal';
  createdAt: Date;
}
