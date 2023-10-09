import { CSSProperties } from "react";

export type customStylesProps = {
  mainContainer?: CSSProperties;
  switchContainer?: CSSProperties;
  iconsContainer?: CSSProperties;
};

export type switchMod = "dinamic" | "static";
export type darkmodeProps = {
  switchStyles?: handlerStylesProps;
  icons?: iconsType | boolean;
  switchMode?: switchMod;
  styles?: customStylesProps;
};

export type themeType = "Light" | "Dark";
export type handlerStylesProps = [
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
