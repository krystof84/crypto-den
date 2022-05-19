import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import moment from 'moment';
import { formatPrice } from "helpers/helpers";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts';
import TooltipChart from 'components/TooltipChart/TooltipChart';

const Header = ({currency, currencyChart}) => {
  const CurrencyImage = () =>  currency.image ? <img src={currency.image.small} alt={currency.symbol} /> : null;
  const price = currency.market_data ? formatPrice(currency.market_data.current_price.usd, '$') : null;
  const { name, symbol, market_cap_rank } = currency;
  const price_change_percentage_24h_in_usd = currency.market_data ? (currency.market_data.price_change_percentage_24h_in_currency.usd).toFixed(2) : null;
  const PriceChangePercentageWrapper = () => {
    let css = {};

    if( price_change_percentage_24h_in_usd > 0 ) {
      css = {
        color: 'green',
        bgColor: 'green',
      };
    } else {
      css = {
        color: 'red',
        bgColor: 'red',
      };
    }

    return <Chip
      component="span"
      sx={{
        color: (theme) => theme.palette.success.light,
        fontWeight: 'bold',
      }}
      label={price_change_percentage_24h_in_usd + '%'}
    />;
  };
  const currencyPricesData = currencyChart.prices;
  let currencyPrices = [];

  if(currencyPricesData) {
    currencyPricesData.forEach((value) => {
      let dateFormatted = moment(value[0]).format('DD MMMM YY, HH:mm:ss');
      let xAxisLabel = moment(value[0]).format('DD MMMM');

      currencyPrices.push({
        date: dateFormatted,
        xAxisLabel: xAxisLabel,
        price: value[1],
      })
    });
  }

  return (
  <Box sx={{
    width: '70%',
  }}>
    <Box>
      <CurrencyImage />
      <Typography component="h1">
        {name}
        <span>
        - {symbol}
        </span>
      </Typography>

      <Typography>Market cap rank: {market_cap_rank}</Typography>
    </Box>
    <Box>
      <Typography>
        {name} Price ({symbol})<br/>
        {price} <PriceChangePercentageWrapper /><br />
      </Typography>
    </Box>
    <Box>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart data={currencyPrices} margin={{ top: 50, right: 0, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <YAxis tick={{fontSize: 12, fontFamily: 'Roboto, sans-serif'}} />
            <XAxis dataKey="xAxisLabel" tick={{fontSize: 12, fontFamily: 'Roboto, sans-serif'}} />
            <Tooltip content={<TooltipChart />} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Box>
  </Box>
  );
};

export default Header;
