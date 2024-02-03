import { CSSProperties } from "react";

export type CustomStyles = {
  mainContainer?: CSSProperties;
  switchContainer?: CSSProperties;
  iconsContainer?: CSSProperties;
};

export type SwitchMode = "dynamic" | "static";
export type DarkModeProps = {
  switchStyles: SwitchStyles;
  icons?: Icons | boolean;
  SwitchMode?: SwitchMode;
  styles?: CustomStyles;
  hover?: boolean;
  isDark?: (theme: string) => void;
};

export type ThemeType = "Light" | "Dark";
export type SwitchStyles = [
  {
    theme: ThemeType;
    variables: string[];
    values: string[];
  },
  {
    theme: ThemeType;
    variables: string[];
    values: string[];
  }
];

export type Icons = [
  {
    theme: ThemeType;
    icon: JSX.Element;
  },
  {
    theme: ThemeType;
    icon: JSX.Element;
  }
];

export type HandlerSwitchTheme = {
  theme: ThemeType | undefined;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType | undefined>>;
  setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>;
  icons: Icons | boolean | undefined;
  setIcon: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
  switchStyles: SwitchStyles | undefined;
  darkMode: any;
};

declare const DarkMode: (props: DarkModeProps) => JSX.Element | null;
export default DarkMode;
