import React from 'react';
import PropTypes from 'prop-types';

/** Material-UI */
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';

/** styles */
import { StyledSearchAppBar, StyledInputBase, StyledSide } from './style';

/** Constants */
import MAIN_MENU, { SUBMENU } from '../../../constants/menus';

export default function SearchAppBar({ className }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  /** Mobile version */
  const sideList = side => (
    <StyledSide
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <h2 className="SideList-title">MRN</h2>
      <Divider />
      <List>
        {MAIN_MENU.map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} className="SideList-item" />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {SUBMENU.map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} className="SideList-item" />
          </ListItem>
        ))}
      </List>
    </StyledSide>
  );

  return (
    <StyledSearchAppBar className={className}>
      <AppBar position="static" className="SearchAppBar-App">
        <Toolbar className="SearchAppBar-App-toolbar">
          {/** Mobile version */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            className="SearchAppBar-BtnMenu"
          >
            <Button onClick={toggleDrawer('left', true)}>
              <MenuIcon />
            </Button>
            <SwipeableDrawer
              open={state.left}
              onClose={toggleDrawer('left', false)}
              onOpen={toggleDrawer('left', true)}
            >
              {sideList('left')}
            </SwipeableDrawer>
          </IconButton>
          {/** */}

          <nav className="SearchAppBar-nav">
            <ul className="SearchAppBar-menu">
              <li className="SearchAppBar-item">España</li>
              <li className="SearchAppBar-item">Internacional</li>
              <li className="SearchAppBar-item">Economía</li>
              <li className="SearchAppBar-item">Deportes</li>
              <li className="SearchAppBar-item">Cultura</li>
              <li className="SearchAppBar-item">Ciencia</li>
              <li className="SearchAppBar-item">Tecnología</li>
            </ul>
          </nav>
          <div className="SearchAppBar-search">
            <SearchIcon className="SearchAppBar-searchIcon" />
            <StyledInputBase
              className="SearchAppBar-searchInput"
              placeholder="Buscar en MyRobotNews"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </StyledSearchAppBar>
  );
}

SearchAppBar.propTypes = {
  className: PropTypes.string,
};

SearchAppBar.defaultProps = {
  className: undefined,
};
