import { handlerStylesProps, iconsType } from "./types";
import Icons from "./Icons"

const defaultProps = ()=> {
  return {
    defaultStyles,
    icons
  }
}

const defaultStyles: handlerStylesProps = [
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

  const { dark, light } = Icons();
  const icons: iconsType = [
    {
      theme: "Dark",
      icon: dark
    },
    {
      theme: "Light",
      icon: light
    }
  ];
  export default defaultProps;