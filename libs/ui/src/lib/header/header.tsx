import { AppBar } from './header.style'
import { Toolbar, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

/* eslint-disable-next-line */
export interface HeaderProps {
  open?: boolean,
  handleDrawerOpen?: () => void,
  children?: any
}

export function Header(props: HeaderProps) {
  return (
    <AppBar position="fixed" open={props.open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={props.handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(props.open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        {props.children}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
