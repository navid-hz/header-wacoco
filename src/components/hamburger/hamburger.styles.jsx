import styled from "styled-components";



    
    

export const HamburgerContainer = styled.div`

    width: 24px;
    height: 24px;
    position: relative;
    transform: rotate(0deg);
    transition: .5s ease-in-out;
    cursor: pointer;
    display: none;

    @media (max-width: 992px) {
      display: block;
      float: right;
    }

    span {
        display: block;
        position: absolute;
        height: 2px;
        width: 83%;
         background: ${props => props.color ? props.color : '#fff'};
        border-radius: 2px;
        opacity: 1;
        left: 2px;
        transform: rotate(0deg);
        transition: .25s ease-in-out;
        }

    span:nth-child(1) {
      top: 5px;
      transform-origin: left center;  
    }
    span:nth-child(2) {
      top: 11px;
      transform-origin: left center;  
    }
    span:nth-child(3) {
      top: 17px;
      transform-origin: left center;  
    }
    &.open span:nth-child(1) {
      transform: rotate(45deg);
      top: 4px;
      left: 5px;
    }
    &.open span:nth-child(2) {
      width: 0%;
      opacity: 0;
    }
    &.open span:nth-child(3) {
      transform: rotate(-45deg);
      top: 18px;
      left: 5px;
    }

`;