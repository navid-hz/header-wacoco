import React from "react";
import propTypes from "prop-types";
import NavBar from './navbar';
import { HeaderContainer, Logo, Button } from "./header.styles";

const Header = (items) => {
  return (
    <HeaderContainer>
        <Logo href="#" alt='WACOCO Logo'></Logo>
        <NavBar />
        <Button>Contact us </Button>
      
    </HeaderContainer>
  );
};

Header.propTypes = {
    items: propTypes.arrayOf(
        propTypes.shape({
            title: propTypes.string.isRequired,
            url: propTypes.string.isRequired,
            submenu: propTypes.array,
        })
    ),
};

export default Header;