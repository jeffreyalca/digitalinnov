import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from '../header/header';
import SideNav from '../side-nav/side-nav';
import Main from '../main/main';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface LayoutProps {
  headerChildren?: any,
  menuItems?: any[],
  children?: any,
}

export function Layout(props: LayoutProps) {
  const [open, setOpen] = useState(true);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header open={open} handleDrawerOpen={handleDrawerOpen} >{props.headerChildren}</Header>
      <SideNav open={open} handleDrawerClose={handleDrawerClose} menuItems={props.menuItems}></SideNav>
      <Main>{props.children}</Main>
    </Box>
  );
}

export default Layout;
