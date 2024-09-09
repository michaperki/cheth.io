import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Box, Typography, Button, Container } from '@mui/material';
import Header from './components/Header';
import createAppTheme from './theme/createAppTheme';
import useDarkMode from './hooks/useDarkMode';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const theme = React.useMemo(() => createAppTheme(darkMode), [darkMode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column' 
      }}>
        <Header 
          toggleDarkMode={toggleDarkMode} 
          darkMode={darkMode}
        />
        <Box
          sx={{
            flexGrow: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundImage: 'url(/splash-image.jpg)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'blur(5px)',
              transform: 'scale(1.1)',
              zIndex: -1,
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 0,
            }}
          />
          <Container maxWidth="sm" sx={{ position: 'relative', textAlign: 'center', color: 'white', zIndex: 1 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              Welcome to Cheth
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Play Chess with Ethereum Stakes
            </Typography>
            <Typography variant="body1" paragraph>
              Experience the thrill of chess combined with the excitement of cryptocurrency wagers. 
              Cheth brings together strategy and blockchain technology for a unique gaming experience.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              href="https://app.cheth.io" 
              sx={{ mt: 2 }}
            >
              Start Playing Now
            </Button>
          </Container>
        </Box>
        <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: (theme) => theme.palette.background.paper }}>
          <Container maxWidth="sm">
            <Typography variant="body2" color="text.secondary" align="center">
              © {new Date().getFullYear()} Cheth. All rights reserved.
            </Typography>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
