import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { useParams } from 'react-router-dom';
import { useCrypto } from 'hooks/useCrypto';
import Main from 'components/Currency/Main/Main';
import SideBar from 'components/Currency/SideBar/SideBar';

const Currency = () => {
  const {id} = useParams();
  const { getCurrencyById, getMarketChartByCurrencyId } = useCrypto();
  const [ currency, setCurrency ] = useState({});
  const [ currencyChart, setCurrencyChart ] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const crypto = await getCurrencyById(id);
        setCurrency(crypto.data);
      } catch (e) {
        console.log(e);
      }
    })();

    (async () => {
      try {
        const cryptoChart = await getMarketChartByCurrencyId(id, 7);
        setCurrencyChart(cryptoChart.data);

      } catch (e) {
        console.log(e);
      }
    })();


  }, [getCurrencyById, getMarketChartByCurrencyId, id]);

  return (
    <Box sx={{
      display: 'flex',
    }}>
      <Main currency={currency} currencyChart={currencyChart} />
      <SideBar />
    </Box>
  );
};

export default Currency;