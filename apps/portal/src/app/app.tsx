// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Layout } from '@digitalinnov/ui';
import { Typography } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

export function App() {
  const menuItems = [
    {
      subMenu: [
        { label: 'Inbox', icon: <InboxIcon />, path:'/test'},
        { label: 'Starred', icon: <MailIcon />, path:'/'},
        { label: 'Send email', icon: <InboxIcon />, path:'/'},
        { label: 'Send email', icon: <MailIcon />, path:'/'}
      ]
    },
    {
      subMenu:[
        { label: 'All mail', icon: <InboxIcon />, path:'/'},
        { label: 'Trash', icon: <MailIcon />, path:'/'},
        { label: 'Spam', icon: <InboxIcon />, path:'/'}]
    }
  ]
  return (
    <Router>
      <Layout 
        headerChildren={
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        }
        menuItems={menuItems}
      >
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
