import clsx from 'clsx';
import {numberWithCommas, usdPrice} from "helpers/helpers";
import { CryptoListItemName } from "components/CryptoList/CryptoList.styles";

export const CryptoListColumns = [
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