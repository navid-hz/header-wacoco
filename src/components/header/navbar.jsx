import React, {useState} from "react";
import Button from "../button/button";
import { NavbarContainer, NavbarItem, NavbarList, SubNavbarList, NavbarLink, SubNavbarItem, ChevronDown } from "./header.styles";

const NavBar = ({items, isOpen}) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    console.log(openSubmenu);
    const handleSubmenuToggle = () => {
        setOpenSubmenu(!openSubmenu);
    };

    const renderSubmenu = (submenu) => {
        return (
            <SubNavbarList items={submenu} key={submenu.index} onClick={() => handleSubmenuToggle(submenu.index) } className={openSubmenu ? "dropdown__open" : 'dropdown__close' } >
                {submenu.map((item, subIndex) => {
                    return (
                        <SubNavbarItem key={subIndex}>
                            <NavbarLink href={item.url}>
                            {item.title}
                            {item.submenu  && renderSubmenu(item.submenu)}
                            </NavbarLink>
                            
                            
                        </SubNavbarItem>
                    );
                }
                )}
            </SubNavbarList>
            
        );
    }

    return (
        <NavbarContainer items={items}>
            <NavbarList items={items} key={items.index } onClick={() => handleSubmenuToggle(items.index)} className={ isOpen ? 'open' : 'close' }>
        {items.map((item, index) => {
            return (
                <NavbarItem key={index}>
                    <NavbarLink href={item.url}>
                    {item.title}
                    {item.submenu ? <ChevronDown role="img" className={openSubmenu? 'clicked' : ''}>
                                
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 10L12.0008 14.58L17 10" stroke="#979CC9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </ChevronDown> : null}
                    
                    
                    </NavbarLink>
                    {item.submenu && renderSubmenu(item.submenu, index)}
                </NavbarItem>
            );
            
        })}
        <Button className='CUButton' label="Contact Us" size="small" backgroundColor="defult" />
        </NavbarList>
        
            
    
        </NavbarContainer>
    );
    };

export default NavBar;