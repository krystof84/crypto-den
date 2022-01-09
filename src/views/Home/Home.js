import React, { useEffect, useState } from 'react';
import CryptoList from 'components/CryptoList/CryptoList';
import { CryptoListColumns } from 'components/CryptoList/CryptoListColumns';
import { addIndexesObjectsInArray } from "helpers/helpers";
import { useCrypto } from "hooks/useCrypto";
import Box from '@mui/material/Box';

const Home = () => {
  const [ cryptoList, setCryptoList ] = useState([]);
  const { getCryptoList } = useCrypto();

  const rows = cryptoList;
  const columns = CryptoListColumns;

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
