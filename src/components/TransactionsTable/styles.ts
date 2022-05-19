import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 4rem;

  .deposit {
    color: var(--green);
  }
  .withdrawal {
    color: var(--red);
  }

  table {
    width: 100%;
    text-align: left;
    border-spacing: 0 0.5rem;

    th {
      color: var(--text-body);
      font-weight: 400;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background-color: var(--shape);
      border-radius: 0.25rem;
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }
    }

    @media (max-width: 599px) {
      display: none;
    }
  }
`;

export const CardBox = styled.div`
  background-color: var(--shape);
  width: 90%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.4rem 1.8rem;
  border-radius: 0.3rem;

  margin: 1rem 2rem;

  div {
    display: flex;
    justify-content: space-between;

    .deposit,
    .withdrawal {
      font-size: 1.4rem;
    }

    &:first-child {
      flex-direction: column;
      gap: 0.2rem;
      text-transform: capitalize;
    }

    &:last-child {
      color: var(--text-body);
      font-size: 1rem;
    }
  }

  @media (min-width: 599px) {
    display: none;
  }
`;
