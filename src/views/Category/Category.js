import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CryptoList from 'components/CryptoList/CryptoList';
import { CryptoListColumns } from 'components/CryptoList/CryptoListColumns';
import { addIndexesObjectsInArray } from "helpers/helpers";
import { useCrypto } from "hooks/useCrypto";
import Box from '@mui/material/Box';

const Category = () => {
  const [ cryptoList, setCryptoList ] = useState([]);
  const { getCryptoListByCategory } = useCrypto();
  const rows = cryptoList;
  const columns = CryptoListColumns;
  const { id } = useParams();

  useEffect(() => {

    (async() => {
      const list = await getCryptoListByCategory(id);
      const newList = addIndexesObjectsInArray(list.data);

      setCryptoList(newList);
    })();

  }, [getCryptoListByCategory, id] );

  return (
    <Box>
      <h1>Category: {id}</h1>
      <CryptoList rows={rows} columns={columns} />
    </Box>
  );
};

export default Category;
