import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import LeftDrawer from './LeftDrawer';

const NavbarStyles = styled.div`
  flex-grow: 1;
  .menubutton {
    margin-right: 20px;
  }
  .title {
    flex-grow: 1;
  }
`;

export default function NavBar() {
  const [open, setOpen] = React.useState(false);

  return (
    <NavbarStyles>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="menuButton"
            color="inherit"
            aria-label="Menu"
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="title">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <LeftDrawer open={open} setOpen={setOpen} />
    </NavbarStyles>
  );
}
