import React, { useEffect, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { CryptoListItemName } from "./CryptoList.styles";

const CryptoList = () => {
  const [ cryptoList, setCryptoList ] = useState([]);
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  const usdPrice = {
    type: 'number',
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
  };

  const columns = [
    { field: 'index', headerName: '#', width: 50 },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      renderCell: (params) => (
        <CryptoListItemName>
          <img src={params.row.image} alt={params.row.name} />
          <span>{params.row.name}</span>
        </CryptoListItemName>
      ),
    },
    { field: 'current_price', headerName: 'Price', width: 120, ...usdPrice },
    {
      field: 'price_change_percentage_24h',
      headerName: '24h %',
      headerClassName: 'MuiDataGrid-columnHeader--alignRight',
      cellClassName: (params) => {
        return clsx('MuiDataGrid-cell--textRight', {
          negative: params.value.slice(0, -1) < 0,
          positive: params.value.slice(0, -1) > 0,
        });
      },
      width: 100,
      valueGetter: ({ value }) => value && value.toFixed(2) + '%',
    },
    { field: 'market_cap', headerName: 'Market Cap', width: '180', ...usdPrice }
  ];
  const rows = cryptoList;

  let result = [];
  let filteredResult = [];
  let singleRow = {};

  useEffect(() => {
    let isMounted = true;

    axios
      .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
      .then((res) => {
        if(isMounted) {
          result = [...res.data];
          res.data.map((item, index) => {
            singleRow = {
              index: ++index,
              id: item.id,
              image: item.image,
              name: item.name,
              current_price: item.current_price,
              price_change_percentage_24h: item.price_change_percentage_24h,
              market_cap: item.market_cap
            };
            filteredResult.push(singleRow);
          })
        }
      })
      .then(() => {
          // if(isMounted) setCryptoList(filteredResult);
          if(isMounted) {
            console.log(result);
            setCryptoList(filteredResult);
          }

        }
      )
      .catch((err) => console.log(err));

    return () => { isMounted = false; }
  }, []);

  return (
    <Box
      sx={{
        height: '80vh',
        width: '100%',

        '.MuiDataGrid-cell': {
          fontWeight: 'bold',

          '&.positive': {
            color: (theme) => theme.palette.success.light,
          },

          '&.negative': {
            color: (theme) => theme.palette.error.main,
          }
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
      />
    </Box>
  );
};

export default CryptoList;
