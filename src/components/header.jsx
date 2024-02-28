import React, {useState} from "react";
import propTypes from "prop-types";
import NavBar from './navbar';
import { HeaderContainer, Logo, Button, HamburgerMenu } from "./header.styles";
import LogoLg from '../assets/Wacoco-Loggo-LG.svg';
//import BurgerIcon from '../assets/hamburger-close.svg'

const Header = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerMenu = () => {
        setIsOpen(!isOpen);
    }

  return (
    <HeaderContainer items={items}>
        <Logo href="#">
            <img src={LogoLg} alt='WACOCO Logo' />
        </Logo>
        <NavBar items={items} isOpen={isOpen} />
        
        <Button>Contact us </Button>

        <HamburgerMenu type="button" onClick={handleHamburgerMenu} isOpen={isOpen}>
        <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect className={isOpen ? 'active top' : 'top'} x="2" y="5" width="20" height="2" rx="1" fill="#fff"/>
            <rect className={isOpen ? 'active middle' : 'middle'} x="2" y="17" width="20" height="2" rx="1" fill="#fff"/>
            <rect className={isOpen ? 'active bottom' : 'bottom'} x="2" y="11" width="20" height="2" rx="1" fill="#fff"/>
        </svg>
        </HamburgerMenu>
    </HeaderContainer>
  );
};

Header.propTypes = {
    items: propTypes.array.isRequired,
};

export default Header;