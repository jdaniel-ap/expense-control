import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

interface ButtonProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#12A454',
  red: '#E52E4D',
};

const mobileHeight = css`
  @media (max-width: 600px) {
    height: 5rem;
    font-size: 1.2rem;
  }
`;

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    height: 3.5rem;
    border-radius: 0.3rem;
    border: 1px solid var(--light-gray);
    margin-bottom: 1rem;
    padding: 0 1rem;
    background: var(--gray);

    ${mobileHeight}
  }

  .add-task-btn {
    background-color: var(--green);
    padding: 1rem;
    color: var(--shape);
    border: none;
    border-radius: 0.3rem;
    transition: 0.2s;
    margin-top: 0.8rem;

    &:hover {
      filter: brightness(0.95);
    }

    @media (max-width: 600px) {
      height: 4rem;
    }
  }

  .button-group {
    height: 3.5rem;
    margin-bottom: 1rem;
    display: flex;
    gap: 0.5rem;

    img {
      width: 1.5rem;
    }

    ${mobileHeight}
  }
`;

export const Button = styled.button<ButtonProps>`
  flex: 1;
  padding: 1rem;
  border: 1px solid
    ${({ isActive, activeColor }) =>
      isActive
        ? transparentize(0.99, colors[activeColor])
        : 'var(--light-gray)'};
  border-radius: 0.3rem;
  color: var(--text-title);
  background-color: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.9, colors[activeColor]) : 'transparent'};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  transition: 0.2s;

  ${mobileHeight}
`;
