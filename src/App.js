import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Button } from '@mui/material';
import Header from './components/Header';
import createAppTheme from './theme/createAppTheme';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const theme = React.useMemo(() => createAppTheme(darkMode), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header 
          toggleDarkMode={toggleDarkMode} 
          darkMode={darkMode}
        />
        <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', p: 3 }}>
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Cheth
          </Typography>
          <Typography variant="h5" component="h2" gutterBottom>
            Play Chess with Ethereum Stakes
          </Typography>
          <Button variant="contained" color="primary" size="large" href="https://cheth-client.vercel.app" sx={{ mt: 4 }}>
            Launch App
          </Button>
        </Box>
        <Box component="footer" sx={{ p: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary">
            © 2023 Cheth. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
