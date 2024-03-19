import type { DarkmodeVariables, Icons } from "../types";
import DefaultIcons from "../assets/Icons";

const defaultProps = () => {
  return {
    defaultVariables,
    icons,
  };
};

const defaultVariables: DarkmodeVariables = {
  dark: {
    "--main-background": "#000",
    "--main-color": "#fff",
  },
  light: {
    "--main-background": "#fff",
    "--main-color": "#000",
  },
};

const { dark, light } = DefaultIcons();
const icons: Icons = {
  dark: {
    icon: dark,
  },
  light: {
    icon: light,
  },
};

export default defaultProps;
