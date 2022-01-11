import React from 'react';
import { useNavigate } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import CryptoListSubMenu from "../CryptoListSubMenu/CryptoListSubMenu";

const CryptoList = ({rows, columns}) => {
  let navigate = useNavigate();

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
        sx={{
          '& .MuiDataGrid-row': {
            cursor: 'pointer',
          },
        }}
        onRowClick={(params) => {
          navigate('/currency/' + params.id);
        }}
      />
    </Box>
  );
};

export default CryptoList;
