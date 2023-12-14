import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 767,
      lg: 1023,
      xl: 1440,
      xxl: 1535
    },
  },
    palette: {
      mode: 'dark',
    },
  });