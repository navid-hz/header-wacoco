import Footer from './Footer';

const items = [
    {
        title: "About us",
        url: "#",
    },
    {
        title: "Our approach",
        url: "#",
    },
    {
        title: "How we work",
        url: "#",
        submenu: [
            {
                title: "Students",
                url: "#"
            },
            {
                title: "Clients",
                url: "#"
            }
        ]
    },
    {
        title: "Career",
        url: "#",
    },
];

const footerInfo = {
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing",
    contact: {
        email: "wacoco@wacoco.es",
        phone: "+46(0)735335745"
    },
    social: "Linkedin"
};

export default {
    title: "Footer",
    component: Footer,
    argTypes: {
        items: {
        control: {
            type: "array"
        }
        },
        footerInfo: {
        control: {
            type: "object"
        }
        }
    }
    };

export const Template = {
    args: {
        items: items,
        footerInfo: footerInfo
    }  
}