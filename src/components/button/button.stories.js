import Button from "./button";
import { action } from "@storybook/addon-actions";

export default {
    title: "main_ui/atoms/Button",
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        label: { control: "text" },
        size: { control: { type: "inline-radio", options: ["small", "big", "large"] }},
        backgroundColor: { control: 'color'},
        onClick: { action: "clicked" },
    },
    parameters: {
        componentSublabel: "Displays a button",
        layout : "centered",
         backgrounds: {
    default: 'light', 
    values: [
      { name: 'light', value: '#FFFFFF' }, 
      { name: 'dark', value: '#000000' }, 
    ],
  },
    }
};

// Stories
export const Default = {
    args: {
        label: "Contact Us",
        size: "small",
        backgroundColor: "defult",
        onClick: action("clicked"),
    }
};

export const WhiteBig = {
    args: {
        label: "Contact Us",
        size: "big",
        backgroundColor: "white",
        onClick: action("clicked")
        },
    parameters: {
            backgrounds: {
              default: 'dark',
            }
          }
    };

export const BlueLarge = {
    args: {
        label: "Contact Us",
        size: "large",
        backgroundColor: "blue",
        onClick: action("clicked"),
    },
};

