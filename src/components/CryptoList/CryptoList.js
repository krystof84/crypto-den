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

        '.MuiDataGrid-cell': {
          fontWeight: 'bold',

          '&.positive': {
            color: (theme) => theme.palette.success.light,
          },

          '&.negative': {
            color: (theme) => theme.palette.error.main,
          }
        },

        '& .MuiDataGrid-row': {
          cursor: 'pointer',
        },

        '& .css-1nytev6-MuiDataGrid-root .MuiDataGrid-columnHeader:focus, & .css-1nytev6-MuiDataGrid-root .MuiDataGrid-cell:focus': {
          outline: 'none',
        }
      }}
    >
      <CryptoListSubMenu />
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        autoHeight={true}
        onRowClick={(params) => {
          navigate('/currency/' + params.id);
        }}
      />
    </Box>
  );
};

export default CryptoList;
