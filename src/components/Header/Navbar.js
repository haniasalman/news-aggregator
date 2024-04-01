import React, { useState } from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Link from '@material-ui/core/Link';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchArticlesRequest } from '../../redux-store/NewsApiOrg/actions';

const Navbar = ({ setSearchQuery }) => {
  const classes = useStyles();
  const theme = useTheme();
  const history = useHistory();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [anchorEl, setAnchorEl] = useState(null);
  const pages = ['Fashion', 'Food', 'Health', 'Politics', 'Travel'];

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (page) => {
    setSearchQuery(page);
    history.push('/list');
    setAnchorEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && event.target.value.trim() !== '') {
      dispatch(searchArticlesRequest(event.target.value.trim()));
      history.push(`/search?q=${event.target.value.trim()}`);
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ background: 'rgb(197,69,192)' }}>
        <Toolbar>
          {isMobile && (
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Menu
            id='menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {pages.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleMenuItemClick(setting)}
              >
                <Typography textalign='center'>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>

          <Typography variant='h6' className={classes.title}>
            <Link href='/' underline='none' style={{ color: '#fcf3fb' }}>
              {' '}
              News Point
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <TextField
            onChange={handleSearchChange}
            onKeyPress={handleKeyPress}
            className={classes.searchInput}
            variant='outlined'
            placeholder='Search'
            InputProps={{
              style: { color: 'white' },
            }}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
