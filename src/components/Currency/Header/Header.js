import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { formatPrice } from "helpers/helpers";

const Header = ({currency}) => {
  const CurrencyImage = () =>  currency.image ? <img src={currency.image.small} alt={currency.symbol} /> : null;
  const price = currency.market_data ? formatPrice(currency.market_data.current_price.usd, '$') : null;
  const { name, symbol, market_cap_rank, categories } = currency;
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

  return (
  <Box sx={{
    display: 'flex',
  }}>
    <Box>
      <Box>
        <CurrencyImage />
        <Typography component="h1">
          {name}
          <span>
          - {symbol}
          </span>
        </Typography>
      </Box>
      <Box>
        <Typography>Market cap rank: {market_cap_rank}</Typography>
        <Typography>
          Category: { categories ? categories.map((category) => {
            return category;
          }) : null }
        </Typography>
      </Box>
    </Box>

    <Box>
      <Typography>
        {name} Price ({symbol})<br/>
        {price} <PriceChangePercentageWrapper /><br />
      </Typography>
    </Box>
  </Box>
  );
};

export default Header;
