import { CSSProperties } from 'react';

export declare type CustomStyles = {
    mainContainer?: CSSProperties;
    switchContainer?: CSSProperties;
    iconsContainer?: CSSProperties;
};

declare const DarkMode: (props: DarkModeProps) => JSX.Element | null;
export default DarkMode;

export declare type DarkModeProps = {
    switchStyles: SwitchStyles;
    icons?: Icons | boolean;
    SwitchMode?: SwitchMode;
    styles?: CustomStyles;
    hover?: boolean;
    isDark?: (theme: string) => void;
};

export declare type HandlerSwitchTheme = {
    theme: ThemeType | undefined;
    setTheme: React.Dispatch<React.SetStateAction<ThemeType | undefined>>;
    setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>;
    icons: Icons | boolean | undefined;
    setIcon: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
    switchStyles: SwitchStyles | undefined;
    darkMode: any;
};

export declare type Icons = [
    {
    theme: ThemeType;
    icon: JSX.Element;
},
    {
    theme: ThemeType;
    icon: JSX.Element;
}
];

export declare type SwitchMode = "dynamic" | "static";

export declare type SwitchStyles = [
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

export declare type ThemeType = "Light" | "Dark";

export { }
