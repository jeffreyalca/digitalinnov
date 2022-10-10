
import { Drawer, DrawerHeader } from './side-nav.styles';
import { IconButton, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
export interface SideNavProps {
  open?: boolean,
  handleDrawerClose?: () => void,
  menuItems?: any[]
}

const drawerWidth = 240;

export function SideNav(props: SideNavProps) {
  const theme = useTheme();
  
  return (
    <Drawer variant="permanent" open={props.open}>
        <DrawerHeader>
          <IconButton onClick={props.handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {props.menuItems && props.menuItems.map((menu, i) => (<List>
          
          {i !== 0 && <Divider />}
          {menu.subMenu.map((item: any, index: number) => (
            <ListItem key={item.label} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: props.open ? 'initial' : 'center',
                  px: 2.5,
                }}
                component={Link}
                to={item.path}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: props.open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} sx={{ opacity: props.open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>))}
        
      </Drawer>
  );
}

export default SideNav;
