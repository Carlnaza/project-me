import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { fade, makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu } from '@material-ui/core';

import { Menu as MenuIcon, Search as SearchIcon, AccountCircle, Mail as MailIcon, Notifications as NotificationsIcon, MoreVert as MoreIcon, ExitToApp as ExitToAppIcon } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    cursor: 'pointer'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    flex: '1 0 0%',
    justifyContent: 'flex-end',
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    flex: '1 0 0%',
    justifyContent: 'flex-end',
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));


const Navbar = () => {
  const classes = useStyles();
  const [menu, setMenu] = useState('')

  const toggleOpen = (event) => {
    menu ? setMenu('') : setMenu(event.currentTarget)
  }

  const handleLogOut = () => {
    localStorage.removeItem('user')
    window.location = '/login'
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={menu}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={menu}
      onClose={toggleOpen}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={(() => window.location = '/profile')}>
        <IconButton color="inherit">
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem >
        <IconButton color="inherit">
          <ExitToAppIcon />
        </IconButton>
        <Typography onClick={handleLogOut} className={classes.logOut} style={{ cursor: 'pointer' }}>Log Out</Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      {/* if user is logged in, then show navbar */}
      {localStorage.getItem('user') &&

        <div className={classes.grow}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                className={classes.title}
                onClick={(() => window.location = '/')}
                noWrap>
                Project Me
              </Typography>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
              <div className={classes.sectionDesktop}>
                <IconButton color="inherit">
                  <Badge badgeContent={17} color="secondary">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={(() => window.location = '/profile')}>
                  <Badge color="secondary">
                    <AccountCircle />
                  </Badge>
                </IconButton>
                <IconButton color="inherit" onClick={handleLogOut}>
                  <ExitToAppIcon />
                </IconButton>

              </div>
              <div className={classes.sectionMobile}>
                <IconButton
                  onClick={toggleOpen}
                  color="inherit">
                  <MoreIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}

        </div>

      }
    </>
  );
}

export default Navbar

