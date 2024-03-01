import  Hamburger  from "./hamburger";

export default {
    title: "main_ui/atoms/Hamburger",
    component: Hamburger,
    argTypes: {
        color: { control: "color" },
        className: { control: "text" },
        isOpen: { control: "boolean" },
        
    },
    parameters: {
        layout: "centered",
        backgrounds: {
            default: "dark",
        },
    },

    };

export const HamburgerMenu = {
    args: {
        color: "#fff",
        className: "burger",
        isOpen: false,	
         
    }
};