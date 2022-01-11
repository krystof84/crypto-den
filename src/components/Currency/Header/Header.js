import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Header = ({currency}) => {

  return (
  <Box>
    <Box>
      <Box>
        { currency.image ? <img src={currency.image.small} alt={currency.symbol} /> : null }
        <Typography component="h1">
          {currency.name}
          <span>
          - {currency.symbol}
          </span>
        </Typography>
      </Box>
      <Box>
        <Typography>Market cap rank: {currency.market_cap_rank}</Typography>
        <Typography>
          Category: { currency.categories ? currency.categories.map((category) => ( category )) : null }
        </Typography>
      </Box>
    </Box>

    <Box>
      {/*<Typography>{currency}</Typography>*/}
    </Box>
  </Box>
  );
};

export default Header;
