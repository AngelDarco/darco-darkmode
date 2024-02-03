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
  isDark?: (e: string) => void;
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

export type HandlerSwitchThemeProps = {
  theme: themeType | undefined;
  setTheme: React.Dispatch<React.SetStateAction<themeType | undefined>>;
  setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>;
  icons: iconsType | boolean | undefined;
  setIcon: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
  switchStyles: switchStylesProps | undefined;
  darkmode: any;
};

declare const Darkmode: (props: darkmodeProps) => JSX.Element | null;
export default Darkmode;
