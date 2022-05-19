import { useEffect, useState } from 'react';
import { TransactionData } from '../../types';
import { api } from '../../services/api';

import { Container } from './styles';
import { Card } from './Card';

export function TransactionsTable() {
  const [transactions, setTransactions] = useState<TransactionData[]>([]);

  useEffect(() => {
    api
      .get('transactions')
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Date</th>
        </thead>
        <tbody>
          {transactions?.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td className={item.type}>
                <>
                  {item.type === 'withdrawal' ? '-' : '+'}
                  {new Intl.NumberFormat('us', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(item.amount)}
                </>
              </td>
              <td>{item.category}</td>
              <td>
                {new Intl.DateTimeFormat('en-US').format(
                  new Date(item.createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {transactions?.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          amount={item.amount}
          category={item.category}
          createdAt={item.createdAt}
          type={item.type}
        />
      ))}
    </Container>
  );
}
