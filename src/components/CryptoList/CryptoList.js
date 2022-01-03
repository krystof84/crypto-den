import React, { useEffect, useState } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import { CryptoListItemName } from "./CryptoList.styles";
import { currencyFormatter, numberWithCommas } from "./helpers";

const CryptoList = () => {
  const [ cryptoList, setCryptoList ] = useState([]);

  const usdPrice = {
    type: 'number',
    valueFormatter: ({ value }) => currencyFormatter.format(Number(value)),
  };

  const alignRight = {
    cellClassName: 'MuiDataGrid-cell--textRight',
    headerClassName: 'MuiDataGrid-columnHeader--alignRight'
  };

  const columns = [
    { field: 'index', headerName: '#', width: 20 },
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
    { field: 'market_cap', headerName: 'Market Cap', width: '180', ...usdPrice },
    {
      field: 'circulating_supply',
      headerName: 'Circulating supply',
      width: 220,
      ...alignRight,
      renderCell: (params) => (
        numberWithCommas(params.row.circulating_supply) + ' ' + params.row.symbol.toUpperCase()
      )
    },
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
              symbol: item.symbol,
              current_price: item.current_price,
              price_change_percentage_24h: item.price_change_percentage_24h,
              market_cap: item.market_cap,
              circulating_supply: item.circulating_supply
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
        autoHeight={true}
      />
    </Box>
  );
};

export default CryptoList;
