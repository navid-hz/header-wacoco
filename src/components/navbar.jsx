import React, {useState} from "react";
import { NavbarContainer, NavbarItem, NavbarList, SubNavbarList, NavbarLink } from "./header.styles";

const NavBar = ({items}) => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const handleSubmenuToggle = (index) => {
        setOpenSubmenu(openSubmenu === index ? null : index);
    };

    const renderSubmenu = (submenu, index) => {
        return (
            <SubNavbarList items={submenu} key={submenu.index} onClick={() => handleSubmenuToggle(submenu.index) }>
                {submenu.map((item, subIndex) => {
                    return (
                        <NavbarItem key={subIndex}>
                            <NavbarLink href={item.url}>
                            {item.title}
                            {item.submenu && openSubmenu === index && renderSubmenu(item.submenu, subIndex)}
                            </NavbarLink>
                        </NavbarItem>
                    );
                }
                )}
            </SubNavbarList>
        );
    }

    return (
        <NavbarContainer items={items}>
            <NavbarList items={items} key={items.index} onClick={() => handleSubmenuToggle(items.index)}>
        {items.map((item, index) => {
            return (
                <NavbarItem key={index}>
                    <NavbarLink href={item.url}>
                    {item.title}
                    {item.submenu && openSubmenu === index && renderSubmenu(item.submenu, index)}
                    </NavbarLink>
                </NavbarItem>
            );
            
        })}
        </NavbarList>
        </NavbarContainer>
    );
    };

export default NavBar;