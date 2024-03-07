import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 7.5vw;
    position: relative;
    width: auto;
    max-height: 80px;
    background-color: #000639;

    @media (max-width: 992px) {
        padding: 10px 40px;
    }

    @media (max-width: 768px) {
        padding: 10px 5.3vw;
        max-height: 60px;
    }

`;



export const Button = styled.button`
    @media (max-width: 992px) {
        display: none;
    }
`;

export const NavbarContainer = styled.nav`
    @media (max-width: 992px) {
        
        position: absolute;
        width: 100%;
        top: 83px;
        left: 0;
        right: 0;

`;

export const NavbarList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    list-style: none;

    &.open {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin: 0;
        background-color: #000639;
        width: auto;
        left: 0;
        right: 0;
        top: -19px;
        padding: 0 40px 20px 40px;
        @media (max-width: 768px) {
            padding: 0 20px 20px 20px;
            top: -30px;
        }
    }
    &.open button {
        margin-top: 20px;
    }
    @media (max-width: 992px) {
        display: none;
    }
`;

// &.open li {
        
        
//     position: relative;
//     padding: 19px 0;
//     float: left;
//     display: block;
//     text-align: center;

export const NavbarItem = styled.li`
    
    position: relative;
    margin: 0;
    padding: 10px 15px;
    &:has(ul) {
        padding-bottom: 0;
    }
    @media (max-width: 992px) {
        padding: 18px 0;
    }
    
    
`;

export const NavbarLink = styled.a`
    display: flex;
    text-decoration: none;
    font-family: 'Inter';
    white-space: nowrap;
    font-size: 18px;
    color: #979CC9;
        &:hover {
        color: #fff;
        transition: all 0.3s ease;
        }
        &:active {
            color: red;
        }
        
    @media (max-width: 992px) {
        display: flex;
        align-items: center;
        font-size: 18px;
        color: #979CC9;
        &:hover {
            color: #fff;
            transition: all 0.3s ease;
        }

    }
`;

// &::before {
//     content: '';
//     display: block;
//     width: 100%;
//     height: 3px;
//     bottom: -3px;
//     left: 0;
//     background-color: #FFFFFF;
//     visibility: hidden;
//     transform: scaleX(0.25);
//     transition: transform 1.7s ease;
//     transition-delay: 0.5s;
// }
// &:hover::before {
//     visibility: visible;
//     transform: scaleX(1);
//     width: 100%;
// }

export const SubNavbarList = styled.ul`
    list-style: none;
    position: relative;
    display: none;
    
    left: 0;
    right: 0;
    
    background-color: #000639;
    padding: 0 15px 13px 15px;

    
    

    &.dropdown__open {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: auto;
        position: absolute;
        top: 67px;
        background-color: #000639;
        
        
        

        @media (max-width: 992px) {
            position: relative;
            min-width: 100%;
            top: 0;
            padding:19px 0 0 40px;
        }
        
        
    }
    &.doropdown__open:hover {
        display: block;
    }

    

    

    &:hover .dropdown__open {
        display: block;
    }

    &.dropdown__close {
        display: none;
    }

`;

// &.dropdown__open li a {	
//     display: flex;
//     align-items: center;
// }

// &.dropdown__open  li {
//     display: flex;
//     align-items: center;
//     float: none;
    
//     position: relative;
//     padding-top: 10px;
//     padding-bottom: 10px;
//     background-color: #000639;
// }

export const SubNavbarItem = styled.li`
    
    position: relative;
    padding: 19px 0;
    
`;

export const ChevronDown = styled.span`
    width: 24px;
    height: 24px;
    transition: all 0.5s ease-in-out;
    transform:  rotate(0deg);

     
        &.clicked {
            transform: rotate(180deg);
            
        }
    `;
