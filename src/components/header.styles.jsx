import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 105px;
    position: relative;
    width: auto;
    height: 80px;
    background-color: #000639;

`;

export const Logo = styled.a`
    float: left;
    position: relative;
    .img {
        width: 100px;
        height: auto;
    }

`;

export const Button = styled.button`
`;

export const NavbarContainer = styled.nav`

`;

export const NavbarList = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    list-style: none;
`;

export const NavbarItem = styled.li`
    float: left;
    position: relative;
    margin: 0;
    padding: 10px 15px;   
`;

export const NavbarLink = styled.a`
    text-decoration: none;
    font-family: 'Inter';
    font-size: 18px;
    color: #979CC9;
    &:hover {
        color: #fff;
        transition: all 0.3s ease;
    }
    &:active {
        color: red;
    }
    & ::before {
        content: '';
        display: block;
        width: 100%;
        high: 3px;
        bottom: -3px;
        left: 0;
        background-color: #FFFFFF;
        visibility: hidden;
        transform: scaleX(0.25);
        transition: transform 1.7s ease;
        transition-delay: 0.5s;
    }
    &:hover::before {
        visibility: visible;
        transform: scaleX(1);
        width: 100%;
    }
`;

export const SubNavbarList = styled.ul`
    list-style: none;
    position: absolute;
    display: none;
    min-width: 100%;
    left: 0;
    right: 0;
    top: 70px;
    background-color: #000639;
    padding: 0 15px 13px 15px;
    
    a:hover > &{
        display: block;
    }
`;

export const HamburgerMenu = styled.a`
    display: none;
    position: relative;
    cursor: pointer;
    @media (max-width: 992px) {
        display: block;
        float: right;
    }
    `;

