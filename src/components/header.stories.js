import Header from './header';

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

export default {
    title: 'main_ui/Header',
    component: Header,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    prameters: {
        layout: 'fullscreen',
    }
};

export const Default = {
    args: {
        items: items
}
};