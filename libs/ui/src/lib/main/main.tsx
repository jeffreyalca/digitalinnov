import { Box, Toolbar, Typography } from '@mui/material';
import styles from './main.module.scss';

/* eslint-disable-next-line */
export interface MainProps {
  children?: any
}

export function Main(props: MainProps) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {props.children}
    </Box>
  );
}

export default Main;
