import './App.css';
import { ThemeProvider } from 'styled-components';

import { theme } from 'shared/design/theme';

import { Routes } from './routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
