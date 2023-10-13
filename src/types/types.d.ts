import { CSSProperties } from "react";

export type customStylesProps = {
  mainContainer?: CSSProperties;
  switchContainer?: CSSProperties;
  iconsContainer?: CSSProperties;
};

export type switchMod = "dinamic" | "static";
export type darkmodeProps = {
  switchStyles?: switchStylesProps;
  icons?: iconsType | boolean;
  switchMode?: switchMod;
  styles?: customStylesProps;
  hover?: boolean;
};

export type themeType = "Light" | "Dark";
export type switchStylesProps = [
  {
    theme: themeType;
    variables: string[];
    values: string[];
  },
  {
    theme: themeType;
    variables: string[];
    values: string[];
  }
];

export type iconsType = [
  {
    theme: themeType;
    icon: JSX.Element;
  },
  {
    theme: themeType;
    icon: JSX.Element;
  }
];
