import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F0F2F5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33CC95;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --shape: #ffffff
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
  
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    max-width: 576px;
    width: 100%;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 0.1s linear;
}

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }

  .ReactModal__Overlay--before-close{
      opacity: 0;
  }
`;
