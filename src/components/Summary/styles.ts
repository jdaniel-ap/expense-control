import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  overflow: scroll;
  margin-top: -4rem;
  gap: 2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  div {
    background-color: var(--shape);
    border-radius: 0.3rem;
    padding: 1.5rem 2rem;
    min-width: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    strong {
      font-size: 2rem;
      font-weight: 500;
      display: block;
      margin-top: 0.6rem;
      color: var(--text-title);
    }
  }

  .highlighted {
    background-color: var(--green);
    color: var(--shape);

    strong {
      color: var(--shape);
    }
  }

  @media (max-width: 720px) {
    padding: 0 2rem;

    height: 12rem;
  }
`;
