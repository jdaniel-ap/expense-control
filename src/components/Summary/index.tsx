import { useContext } from 'react';
import incomeLogo from '../../assets/income.svg';
import outcomeLogo from '../../assets/outcome.svg';
import totalLogo from '../../assets/total.svg';
import { AppContext } from '../../context';

import { Container } from './styles';

export function Summary() {
  const { transactions } = useContext(AppContext);

  const values = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdrawals -= transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    { deposits: 0, withdrawals: 0, total: 0 }
  );

  const formatValues = (value: number) => {
    return Intl.NumberFormat('us-en', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  return (
    <Container>
      <div>
        <header>
          <span>Income</span>
          <img src={incomeLogo} alt='income' />
        </header>
        <strong>{formatValues(values.deposits)}</strong>
      </div>
      <div>
        <header>
          <span>Outcome</span>
          <img src={outcomeLogo} alt='outcome' />
        </header>
        <strong>{formatValues(values.withdrawals)}</strong>
      </div>
      <div className='highlighted'>
        <header>
          <span>Total</span>
          <img src={totalLogo} alt='total' />
        </header>
        <strong>{formatValues(values.total)}</strong>
      </div>
    </Container>
  );
}
