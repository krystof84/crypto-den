import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import axios from 'axios';

const Root = () => {

  useEffect(() => {

    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ThemeProvider theme={theme}>

      </ThemeProvider>
    </div>
  );
};

export default Root;
