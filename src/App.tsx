import './App.css';
import { ThemeProvider } from 'styled-components';

import ligthTheme from 'shared/styles/themes/ligth';

import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={ligthTheme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
