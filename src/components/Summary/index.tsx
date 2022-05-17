import incomeLogo from '../../assets/income.svg';
import outcomeLogo from '../../assets/outcome.svg';
import totalLogo from '../../assets/total.svg';

import { Container } from './styles';

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <span>Income</span>
          <img src={incomeLogo} alt='Orbitc' />
        </header>
        <strong>$ 17.400,00</strong>
      </div>
      <div>
        <header>
          <span>Outcome</span>
          <img src={outcomeLogo} alt='' />
        </header>
        <strong>$ 1.259,00</strong>
      </div>
      <div className='highlighted'>
        <header>
          <span>Total</span>
          <img src={totalLogo} alt='' />
        </header>
        <strong>$ 16.141,00</strong>
      </div>
    </Container>
  );
}
