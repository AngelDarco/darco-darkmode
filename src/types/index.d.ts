import { CSSProperties } from "react";

export type mode = "dynamic" | "static";
export type DarkModeProps = {
  variables: DarkmodeVariables;
  icons?: Icons | boolean;
  mode?: mode;
  styles?: CSSProperties;
  hover?: boolean;
  isDark?: (theme: string) => void;
};

export type Theme = "light" | "dark";
export type DarkmodeVariables = {
  dark: {
    [key: string]: string;
  };
  light: {
    [key: string]: string;
  };
};

export type Icons = {
  dark: {
    icon: JSX.Element;
    styles?: CSSProperties;
  };
  light: {
    icon: JSX.Element;
    styles?: CSSProperties;
  };
};

export type HandlerSwitchTheme = {
  theme: Theme | undefined;
  setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>;
  setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>;
  icons: Icons | boolean | undefined;
  setIcon: React.Dispatch<React.SetStateAction<Icons | undefined>>;
  variables: DarkmodeVariables | undefined;
  darkMode: any;
};

declare const DarkMode: (props: DarkModeProps) => JSX.Element | null;
export default DarkMode;
