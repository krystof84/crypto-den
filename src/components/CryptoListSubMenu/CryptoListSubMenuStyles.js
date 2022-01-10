import { styled } from '@mui/system';

export const Wrapper = styled('div')(({theme})=> ({
  marginBottom: '10px',
  fontWeight: 'bold',
  fontFamily: theme.font.roboto,
  fontSize: '14px',

  '& span': {
    marginRight: '5px',
  },
  '& a': {
    textDecoration: 'none',
    color: theme.color.black,
    padding: '5px',

    '&.active': {
      color: '#da1c1c',
    },
  },
}));


