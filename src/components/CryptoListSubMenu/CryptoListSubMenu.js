import * as React from 'react';
import { Wrapper } from "./CryptoListSubMenuStyles";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import Link from '@mui/material/Link';

const CryptoListSubMenu = () => {
  return (
    <Wrapper>
      <Typography variant="subtitle" component="span">Categories:</Typography>
      <NavLink to="/category/meme-token">Mem Tokens</NavLink>
      <NavLink to="/category/decentralized-finance-defi">Defi</NavLink>
      <NavLink to="/category/non-fungible-tokens-nft">NFT</NavLink>
      <NavLink to="/category/metaverse">Metaverse</NavLink>
      <NavLink to="/category/dot-ecosystem">Polkadot</NavLink>
      <NavLink to="/category/play-to-earn">Play to earn</NavLink>
      <NavLink to="/category/solana-ecosystem">Solana</NavLink>
      <NavLink to="/category/avalanche-ecosystem">Avalanche</NavLink>
    </Wrapper>
  );
};

export default CryptoListSubMenu;