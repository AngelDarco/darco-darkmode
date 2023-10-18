// @types/darco-dark-mode/darco-dark-mode.d.ts

import { CSSProperties } from "react";

export type customStylesProps = {
  mainContainer?: CSSProperties;
  switchContainer?: CSSProperties;
  iconsContainer?: CSSProperties;
};

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

export type switchMod = "dinamic" | "static";

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

export type themeType = "Light" | "Dark";

export interface DarkmodeProps {
  switchStyles?: switchStylesProps;
  icons?: iconsType | boolean;
  switchMode?: switchMod;
  styles?: customStylesProps;
  hover?: boolean;
}

declare module "darco-dark-mode" {
  export default function Darkmode(props: DarkmodeProps): JSX.Element | null;
}
