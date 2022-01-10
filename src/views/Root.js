import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from 'assets/styles/theme';
import ResponsiveAppBar from '../components/AppBar/AppBar';
import Container from '@mui/material/Container';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from 'views/Home/Home';
import Category from 'views/Category/Category';
import Error from 'views/Error/Error';

const Root = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
      <Container>
        <ResponsiveAppBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/category/:id" element={<Category />}/>
          <Route path="/not-found" element={<Error message="Page not found" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </Container>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
