import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { CryptoListItemName } from "./CryptoList.styles";

const CryptoList = () => {
  const [ cryptoList, setCryptoList ] = useState([]);

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
    { field: 'current_price', headerName: 'Price', width: 100},
    { field: 'price_change_percentage_24h', headerName: '24h %', width: 100 },
    { field: 'market_cap', headerName: 'Market Cap', width: 150 }
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
              current_price: item.current_price + '$',
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
      <div style={{ height: '80vh', width: '100%' }}>
      {/*{console.log(cryptoList)}*/}

      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
      />
    </div>
  );
};

export default CryptoList;
