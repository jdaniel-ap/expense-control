import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
  padding: 3rem 2rem 10rem;
`;

export const Content = styled.div`
  max-width: 1100px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  img {
    width: 8rem;
  }

  button {
    padding: 0.6rem 1rem;
    background-color: var(--blue-light);
    border: none;
    color: var(--shape);
    border-radius: 0.25rem;
    font-weight: 600;
    font-size: 12px;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
