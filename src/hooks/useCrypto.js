import { useCallback } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const coinGeckoApiURL = 'https://api.coingecko.com/api/v3';

export const useCrypto = () => {
  let navigate = useNavigate();

  const getCryptoList = useCallback(async () => {
    try {
      return await axios.get(coinGeckoApiURL + '/coins/markets?vs_currency=usd');
    } catch (e) {
      console.log(e);
    }
  }, []);

  const getCryptoListByCategory = useCallback(async (categoryId) => {
    try {
      return await axios.get(coinGeckoApiURL + '/coins/markets?vs_currency=usd&category=' + categoryId);
    } catch (e) {
      console.log(e);
      navigate('/not-found');
    }
  }, [navigate]);

  const getCategoryById = useCallback(async (categoryId) => {
    try {
      const categories = await axios.get(coinGeckoApiURL + '/coins/categories');
      return categories.data.filter((category) => category.id === categoryId);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    getCryptoList,
    getCryptoListByCategory,
    getCategoryById
  }

};