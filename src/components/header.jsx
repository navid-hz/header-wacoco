import React from "react";
import propTypes from "prop-types";
import NavBar from './navbar';
import { HeaderContainer, Logo, Button, HamburgerMenu } from "./header.styles";
import LogoLg from '../assets/Wacoco-Loggo-LG.svg';
import BurgerIcon from '../assets/hamburger-close.svg'

const Header = ({items}) => {
  return (
    <HeaderContainer items={items}>
        <Logo href="#">
            <img src={LogoLg} alt='WACOCO Logo' />
        </Logo>
        <NavBar items={items} />
        <Button>Contact us </Button>
        <HamburgerMenu type="button">
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="20" height="2" rx="1" fill="#fff"/>
            <rect x="2" y="17" width="20" height="2" rx="1" fill="#fff"/>
            <rect x="2" y="11" width="20" height="2" rx="1" fill="#fff"/>
        </svg>
        </HamburgerMenu>
    </HeaderContainer>
  );
};

Header.propTypes = {
    items: propTypes.array.isRequired,
};

export default Header;