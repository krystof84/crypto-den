import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const CryptoList = ({rows, columns}) => {

  return (
    <Box
      sx={{
        width: '100%',

        '.MuiDataGrid-cell': {
          fontWeight: 'bold',

          '&:active, &:link, &:visited, &:focus': {
            outline: 'none',
          },

          '&.positive': {
            color: (theme) => theme.palette.success.light,
          },

          '&.negative': {
            color: (theme) => theme.palette.error.main,
          }
        },
      }}
    >
      <Box>
        Categories:
        <Link href="/category/meme-token">Mem Tokens</Link>
        <Link href="/category/decentralized-finance-defi">Defi</Link>
        <Link href="/category/non-fungible-tokens-nft">NFT</Link>
        <Link href="/category/metaverse">Metaverse</Link>
        <Link href="/category/dot-ecosystem">Polkadot</Link>
        <Link href="/category/play-to-earn">Play to earn</Link>
        <Link href="/category/solana-ecosystem">Solana</Link>
        <Link href="/category/avalanche-ecosystem">Avalanche</Link>
      </Box>
      <DataGrid
        rows={rows}
        columns={columns}
        disableSelectionOnClick
        autoHeight={true}
      />
    </Box>
  );
};

export default CryptoList;
