import { ThemeProvider } from '@mui/material';
import { ReactRouter } from './routes';
import { LightTheme } from './shared/themes';

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <ReactRouter />
    </ThemeProvider>
  );
}
