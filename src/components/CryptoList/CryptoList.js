import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import CryptoListSubMenu from "../CryptoListSubMenu/CryptoListSubMenu";

const CryptoList = ({rows, columns}) => {

  return (
    <Box
      sx={{
        width: '100%',
        marginTop: '30px',

        '.MuiDataGrid-cell': {
          fontWeight: 'bold',

          '&:active, &:link, &:visited, &:focus': {
            outline: 'none',
          },

          '&.positive': {
            color: (theme) => theme.palette.success.light,
          },

          '&.negative': {
            color: (theme) => theme.palette.error.main,
          }
        },
      }}
    >
      <CryptoListSubMenu />
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
