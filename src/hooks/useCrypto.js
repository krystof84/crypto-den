import { useCallback } from 'react';
import axios from 'axios';

const coinGeckoApiURL = 'https://api.coingecko.com/api/v3';

export const useCrypto = () => {

  const getCryptoList = useCallback(async () => {
    try {
      return await axios.get(coinGeckoApiURL + '/coins/markets?vs_currency=usd');
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getCryptoList,
  }

};