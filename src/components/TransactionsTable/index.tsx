import { Container } from './styles';

export function TransactionsTable() {
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
          <tr>
            <td>Desarrollo de website</td>
            <td className='income'>$ 12.800,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Desarrollo de website</td>
            <td className='outcome'>$ 12.800,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
