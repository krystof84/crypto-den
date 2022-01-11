import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCrypto } from 'hooks/useCrypto';
import Header from 'components/Currency/Header/Header';

const Currency = () => {
  const {id} = useParams();
  const { getCurrencyById } = useCrypto();
  const [ currency, setCurrency ] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const crypto = await getCurrencyById(id);
        setCurrency(crypto.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [getCurrencyById, id]);

  return (
    <>
      { console.log(currency) }
      <Header currency={currency} />
    </>
  );
};

export default Currency;