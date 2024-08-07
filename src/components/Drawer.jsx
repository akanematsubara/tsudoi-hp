import * as React from 'react';
import useMedia from '../useMedia';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import IconButton from '@mui/material/IconButton';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const routeLink = {
  color: "black",
}

const menuIcon = {
  height: "45px",
  width: "auto",
}

const phoneMenuIcon = {
  height: "45px",
  width: "auto",
  color: "#e0f2f1",
}

const place = {
  textAlign: "right",
  position: "flex",
}

const title = {
  margin: "9px",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
}

const linkIcon = {
  width: "20px",
  color: "#888888",
}

export const TemporaryDrawer = () => {
  const isMobile = useMedia('(max-width: 1000px)');
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      style={{ padding: "20px", paddingRight: "45px"}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{}}>
        <ListItem style={routeLink} key='HOME' component={Link} to='/tsudoi-hp/' disablePadding>
          <ListItemButton style={{}}>
            {/* <ListItemText primary='TEXT' /> */}
            <p style={title}>HOME</p>
          </ListItemButton>
        </ListItem>
        <ListItem style={routeLink} key='NEWS' component={Link} to='/tsudoi-hp/news' disablePadding>
          <ListItemButton>
            {/* <ListItemText primary='NEWS' /> */}
            <p style={title}>NEWS</p>
          </ListItemButton>
        </ListItem>
        <ListItem style={routeLink} key='INTRODUCTION/MEMBER' component={Link} to='/tsudoi-hp/introduction' disablePadding>
          <ListItemButton>
            {/* <ListItemText primary='INTRODUCTION/MEMBER' /> */}
            <p style={title}>INTRODUCTION/MEMBER</p>
          </ListItemButton>
        </ListItem>
        <ListItem key='YouTube' disablePadding>
          <ListItemButton href='https://www.youtube.com/channel/UCvELpZfQ5fD4i-b8NfyXm9w' target='_blank'>
            {/* <ListItemText primary='YouTube' /> */}
            <p style={title}>YouTube</p>
            <OpenInNewOutlinedIcon style={linkIcon}/>
          </ListItemButton>
        </ListItem>
        <ListItem key='X' disablePadding>
          <ListItemButton href='https://twitter.com/tsudoi_shamisen' target='_blank'>
            {/* <ListItemText primary='X' /> */}
            <p style={title}>X</p>
            <OpenInNewOutlinedIcon style={linkIcon} />
          </ListItemButton>
        </ListItem>
        <ListItem key='Instagram' disablePadding>
          <ListItemButton href='https://www.instagram.com/tsudoi_shamisen' target='_blank'>
            {/* <ListItemText primary='Instagram' /> */}
            <p style={title}>Instagram</p>
            <OpenInNewOutlinedIcon style={linkIcon} />
          </ListItemButton>
        </ListItem>
        <ListItem style={routeLink} key='CONTACT US' component={Link} to='/tsudoi-hp/contact' disablePadding>
          <ListItemButton>
            {/* <ListItemText primary='CONTACT US' /> */}
            <p style={title}>CONTACT US</p>
          </ListItemButton>
        </ListItem>
      </List>
      {/* <List style={{ float: 'right'}}>
        <ListItem style={routeLink} key='HOME' component={Link} to='/tsudoi-hp/' disablePadding>
          <ListItemButton style={{position: "right"}}>
            <p>TEXT</p>
            <OpenInNewOutlinedIcon />
          </ListItemButton>
        </ListItem>
        <ListItem style={routeLink} key='HOME' component={Link} to='/tsudoi-hp/' disablePadding>
          <ListItemButton style={{position: "right"}}>
            <ListItemText primary='HOME' />
            <ListItemIcon>
              <OpenInNewOutlinedIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <ListItem style={routeLink} key='NEWS' component={Link} to='/tsudoi-hp/news' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Button />
            </ListItemIcon>
            <ListItemText primary='NEWS' />
          </ListItemButton>
        </ListItem>
        <ListItem style={routeLink} key='INTRODUCTION/MEMBER' component={Link} to='/tsudoi-hp/introduction' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Button />
            </ListItemIcon>
            <ListItemText primary='INTRODUCTION/MEMBER' />
          </ListItemButton>
        </ListItem>
        <ListItem style={routeLink} key='GALLERY' component={Link} to='/gallery' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Button />
            </ListItemIcon>
            <ListItemText primary='GALLERY' />
          </ListItemButton>
        </ListItem>
        <ListItem key='YouTube' disablePadding>
          <ListItemButton href='https://www.youtube.com/channel/UCvELpZfQ5fD4i-b8NfyXm9w' target='_blank'>
            <ListItemIcon>
              <Button />
            </ListItemIcon>
            <ListItemText primary='YouTube' />
          </ListItemButton>
        </ListItem>
        <ListItem key='X' disablePadding>
          <ListItemButton href='https://twitter.com/tsudoi_shamisen' target='_blank'>
            <ListItemIcon>
              <Button />
            </ListItemIcon>
            <ListItemText primary='X' />
          </ListItemButton>
        </ListItem>
        <ListItem key='Instagram' disablePadding>
          <ListItemButton href='https://www.instagram.com/tsudoi_shamisen' target='_blank'>
            <ListItemIcon>
              <Button />
            </ListItemIcon>
            <ListItemText primary='Instagram' />
          </ListItemButton>
        </ListItem>
        <ListItem style={routeLink} key='CONTACT US' component={Link} to='/tsudoi-hp/contact' disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Button />
            </ListItemIcon>
            <ListItemText primary='CONTACT US' />
          </ListItemButton>
        </ListItem>
      </List> */}
    </Box>
  );

  return (
    <div style={place}>
        {['MENU'].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuOutlinedIcon style={isMobile ? phoneMenuIcon : menuIcon}/>
            </IconButton>
            <Drawer
              anchor='left'
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
    </div>
  );
}
