import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const CryptoList = ({rows, columns}) => {

  return (
    <Box
      sx={{
        width: '100%',

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
