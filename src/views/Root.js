import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'assets/styles/theme';
import ResponsiveAppBar from '../components/AppBar/AppBar';
import Container from '@mui/material/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from 'views/Home/Home';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Container>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Container>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
