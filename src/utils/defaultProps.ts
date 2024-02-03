import type { SwitchStyles, Icons } from "../types";
import DefaultIcons from "../assets/Icons";

const defaultProps = () => {
  return {
    defaultStyles,
    icons,
  };
};

const defaultStyles: SwitchStyles = [
  {
    theme: "Dark",
    variables: ["--main-background", "--main-color", "--main-hover-color"],
    values: ["#000", "#fff", "#fbfbfb"],
  },
  {
    theme: "Light",
    variables: ["--main-background", "--main-color", "--main-hover-color"],
    values: ["#fff", "#000", "#242526"],
  },
];

const { dark, light } = DefaultIcons();
const icons: Icons = [
  {
    theme: "Dark",
    icon: dark,
  },
  {
    theme: "Light",
    icon: light,
  },
];
export default defaultProps;
