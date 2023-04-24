import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-intl-tel-input/dist/main.css';
import 'flag-icon-css/css/flag-icon.css';

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

.scrollable{
  &::-webkit-scrollbar-track {
    border-radius: 0 16px 16px 0;
    background-color: ${props => props.theme.colors.hover};
  }

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 0 16px 16px 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: ${props => props.theme.colors.smoked};
  }
}

body, button, textarea {
  -webkit-font-smoothing: antialiased;
  font: 14px 'Lato', sans-serif;
  background-color: ${props => props.theme.colors.background};
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
  background-size: cover;
  color:${props => props.theme.colors.strong};
}

body {
  -webkit-font-smoothing: antialiased;
  font: 14px 'Lato', sans-serif;
}

input{
  &::placeholder {
    color: ${props => props.theme.colors.opaque};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px ${props =>
      props.theme.colors.background} inset;
      -webkit-text-fill-color: ${props => props.theme.colors.strong};
    }

    caret-color: ${props => props.theme.colors.accent};
  }

  a {
    text-decoration: none;
  }

  .noHoverEffects{
    &:hover{
      text-decoration: none;
    }
  }

  ul {
    list-style: none;
  }

  small{
    font-size: 12px;
  }

  h5{
    margin: 0;
    font-size: 10px;
    color: ${props => props.theme.colors.opaque};
    font-weight: bold;
    text-transform: uppercase;
  }

  button {
    cursor: pointer;
    border: none;

    &:focus{
      outline: 0;
    }

    &:active{
      outline: none;
      border: none;
    }
  }

  .MuiTouchRipple-root {
    color: ${props => props.theme.colors.accent};
  }

  .ql-editor{
    font-family: Georgia, "Times New Roman", Times, serif;

    strong{
      font-family: Georgia, "Times New Roman", Times, serif;
    }
  }
  `;
