import React, {useState} from "react";
import {HamburgerContainer} from "./hamburger.styles";
import propTypes from "prop-types";



const Hamburger = ({color}) => {
    console.log( color);
    const [open, setOpen] = useState(false);
    const handleHamburger = () => {
        setOpen(!open);
    }
    return (
        <>
            <HamburgerContainer className={open ? 'open' : null } type='button' onClick={handleHamburger} color={color}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerContainer>
        </>
    );
    }

Hamburger.propTypes = {
    color: propTypes.string,
};

Hamburger.defaultProps = {
     color: "white"
 };

export default Hamburger;