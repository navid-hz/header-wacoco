import React, {useState} from "react";
import propTypes from "prop-types";
import NavBar from './navbar';

import { HeaderContainer } from "./header.styles";
import Logo from "../logo/logo";
import Hamburger from "../hamburger/hamburger";


//import BurgerIcon from '../assets/hamburger-close.svg'

const Header = ({items}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerMenu = () => {
        setIsOpen(!isOpen);
    }
    
  return (
    <HeaderContainer items={items}>
        <Logo type="normal" className="logo-header" url={'#'} />
        <NavBar items={items} isOpen={isOpen}  />
       
        <Hamburger isOpen={isOpen} className={'burger'} color={'white'} onClick={handleHamburgerMenu} />  
        
    </HeaderContainer>
  );
};

Header.propTypes = {
    items: propTypes.array.isRequired,
};

export default Header;