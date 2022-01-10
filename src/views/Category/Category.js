import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CryptoList from 'components/CryptoList/CryptoList';
import { CryptoListColumns } from 'components/CryptoList/CryptoListColumns';
import { addIndexesObjectsInArray } from "helpers/helpers";
import { useCrypto } from "hooks/useCrypto";
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const Category = () => {
  const [ cryptoList, setCryptoList ] = useState([]);
  const [ category, setCategory ] = useState([]);
  const { getCryptoListByCategory, getCategoryById } = useCrypto();
  const rows = cryptoList;
  const columns = CryptoListColumns;
  const { id } = useParams();

  useEffect(() => {

    (async() => {
      try {
        const list = await getCryptoListByCategory(id);
        const newList = addIndexesObjectsInArray(list.data);
        setCryptoList(newList);
      } catch(e) {
        console.log(e);
      }

      try {
        const currentCategory = await getCategoryById(id);
        setCategory(currentCategory[0]);
      } catch(e) {
        console.log(e);
      }

    })();

  }, [getCryptoListByCategory, getCategoryById, id] );

  return (
    <Box>
      <Typography
        component="h1"
        sx={{
          fontSize: '24px',
          fontWeight: 'bold',
          fontFamily: (theme) => theme.font.roboto,
          marginTop: '20px',
        }}
      >
        Category: {category.name}</Typography>
      <CryptoList rows={rows} columns={columns} />
    </Box>
  );
};

export default Category;
