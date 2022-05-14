import incomeLogo from '../../assets/income.svg';
import outcomeLogo from '../../assets/outcome.svg';
import totalLogo from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomeLogo} alt='' />
        </header>
        <strong>R$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <span>Entradas</span>
          <img src={outcomeLogo} alt='' />
        </header>
        <strong>R$ 1.259,00</strong>
      </div>
      <div className='highlighted'>
        <header>
          <span>Entradas</span>
          <img src={totalLogo} alt='' />
        </header>
        <strong>R$ 16.141,00</strong>
      </div>
    </Container>
  );
}
