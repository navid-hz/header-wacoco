import React from "react";
import propTypes from "prop-types";
import NavBar from './navbar';
import { HeaderContainer, Logo, Button } from "./header.styles";
import LogoLg from '../assets/Wacoco-Loggo-LG.svg';

const Header = ({items}) => {
  return (
    <HeaderContainer items={items}>
        <Logo href="#">
            <img src={LogoLg} alt='WACOCO Logo' />
        </Logo>
        <NavBar items={items} />
        <Button>Contact us </Button>
      
    </HeaderContainer>
  );
};

Header.propTypes = {
    items: propTypes.array.isRequired,
};

export default Header;