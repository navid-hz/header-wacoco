import React from "react";
import {HamburgerContainer} from "./hamburger.styles";
import propTypes from "prop-types";



const Hamburger = ({color, isOpen , className, ...props}) => {
    
    
    return (
        <>
            <HamburgerContainer 
                className={ {className} && !isOpen ? null :'open' } 
                type='button' 
                onClick={props.onClick} 
                color={color} 
                {...props}
                >
                <span></span>
                <span></span>
                <span></span>
            </HamburgerContainer>
        </>
    );
    }

Hamburger.propTypes = {
    color: propTypes.string,
    className: propTypes.string,
    isOpen: propTypes.bool,
    
};

Hamburger.defaultProps = {
    color: "white",
    className: 'burger',
    
 };

export default Hamburger;