import React from 'react';

/** core */
import Today from '../Today';
import Logo from '../logo';
import Button from '../Button';
import SearchAppBar from '../SearchAppBar';

/** styles */
import StyledHeader from './style';

const Header = className => {
  return (
    <StyledHeader className={className}>
      <div className="header-top">
        <div className="centrar">
          <Today className="header-today" />
          <Logo />
          <ul className="header-list-butons">
            <li>
              <Button color="accent" className="header-btn">
                Suscribete
              </Button>
            </li>
            <li>
              <Button color="light" className="header-btn">
                Iniciar sesión
              </Button>
            </li>
          </ul>
        </div>
      </div>
      <div className="header-bot">
        <div className="centrar">
          <SearchAppBar />
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
