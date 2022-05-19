import { TransactionData } from '../../../types';

import { CardBox } from '../styles';

export function Card(props: TransactionData) {
  return (
    <CardBox>
      <div>
        <span>{props.title}</span>
        <span className={props.type}>
          {props.type === 'withdrawal' ? '- ' : '+ '}
          {Intl.NumberFormat('us', {
            currency: 'USD',
            style: 'currency',
          }).format(props.amount)}
        </span>
      </div>
      <div>
        <span>{props.category}</span>
        <span>
          {Intl.DateTimeFormat('us-EN').format(new Date(props.createdAt))}
        </span>
      </div>
    </CardBox>
  );
}
