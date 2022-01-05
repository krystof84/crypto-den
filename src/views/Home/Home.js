import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import CryptoList from 'components/CryptoList/CryptoList'
import { CryptoListItemName } from "components/CryptoList/CryptoList.styles";
import {addIndexesObjectsInArray, numberWithCommas, usdPrice} from "components/CryptoList/helpers";
import {useCrypto} from "hooks/useCrypto";
import Box from '@mui/material/Box';

const Home = () => {
  const [ cryptoList, setCryptoList ] = useState([]);
  const { getCryptoList } = useCrypto();

  const rows = cryptoList;
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
        if(params.value) {
          return clsx('MuiDataGrid-cell--textRight', {
            negative: params.value.slice(0, -1) < 0,
            positive: params.value.slice(0, -1) > 0,
          });
        }
      },
      width: 100,
      valueGetter: ({ value }) => value && value.toFixed(2) + '%',
    },
    { field: 'market_cap', headerName: 'Market Cap', width: '180', ...usdPrice },
    {
      field: 'circulating_supply',
      headerName: 'Circulating supply',
      width: 220,
      cellClassName: 'MuiDataGrid-cell--textRight',
      headerClassName: 'MuiDataGrid-columnHeader--alignRight',
      renderCell: (params) => (
        numberWithCommas(params.row.circulating_supply) + ' ' + params.row.symbol.toUpperCase()
      )
    },
  ];

  useEffect(() => {

    (async() => {
      const list = await getCryptoList();
      const newList = addIndexesObjectsInArray(list.data);
      setCryptoList(newList);
    })();

  }, [getCryptoList] );

  return (
    <Box>
      <CryptoList rows={rows} columns={columns} />
    </Box>
  );
};

export default Home;
