import Logo from "./logo";

export default {
  title: "main_ui/atoms/Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    type: { control: { type: "inline-radio", options: ["normal", "detailed"] } },
    className: { control: "text" },
    url: { control: "text" },
  },
  parameters: {
    componentSublabel: "Displays a logo",
    layout: "centered",
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "#FFFFFF" },
        { name: "dark", value: "#000000" },
      ],
    },
  },
};

export const normal_desktop = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  args: {
    type: "normal",
    className: "logo",
    url: '#'
  },
};

export const normal_tablet = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  args: {
    type: "normal",
    className: "logo",
    url: '#'
  },
};

export const normal_mobile = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    type: "normal",
    className: "logo",
    url: '#'
  },
};

export const detailed_desktop = {
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  args: {
    type: "detailed",
    className: "logo",
    url: '#'
  },
};

export const detailed_tablet = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
  args: {
    type: "detailed",
    className: "logo",
    url: '#'
  },
};

export const detailed_mobile = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  args: {
    type: "detailed",
    className: "logo",
    url: '#'
  },
};
