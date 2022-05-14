import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 4rem;

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

    tr {
      .income {
        color: var(--green);
      }
      .outcome {
        color: var(--red);
      }
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
  }
`;