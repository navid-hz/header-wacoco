import  Hamburger  from "./hamburger";

export default {
    title: "main_ui/atoms/Hamburger",
    component: Hamburger,
    argTypes: {
        color: { control: "color" },
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
    }
};