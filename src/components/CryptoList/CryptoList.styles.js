import { styled } from '@mui/system';

export const CryptoListItemName = styled('div')({
  display: 'flex',

  '& img': {
    width: '30px',
    height: '30px',
    margin: '10px',
  },
  '& span': {
    color: '#000',
  }
});