import { customStyleProps } from "./types";

const customStyles: customStyleProps = [
    {
      theme: "Dark",
      variables: ["--main-background", "--main-color"],
      values: ["#000", "#fff"],
    },
    {
      theme: "Light",
      variables: ["--main-background", "--main-color"],
      values: ["#fff", "#000"],
    },
  ];

  const icons = [
    {
      theme: "Dark",
      icon: ""
    },
    {
      theme: "Light",
      icon: ""
    }
  ];
  export {icons};
export default customStyles;