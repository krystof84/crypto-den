import { styled  } from '@mui/material/styles';

const Box = styled('div')(({ theme }) => ({
  backgroundColor: theme.status.danger,
  width: '100px',
  height: '100px',
}));