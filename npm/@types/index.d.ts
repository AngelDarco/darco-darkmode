import { CSSProperties } from 'react';

export declare type customStylesProps = {
    mainContainer?: CSSProperties;
    switchContainer?: CSSProperties;
    iconsContainer?: CSSProperties;
};

declare const Darkmode: (props: darkmodeProps) => JSX.Element | null;
export default Darkmode;

export declare type darkmodeProps = {
    switchStyles?: switchStylesProps;
    icons?: iconsType | boolean;
    switchMode?: switchMod;
    styles?: customStylesProps;
    hover?: boolean;
    isDark?: (e: string) => void;
};

export declare type HandlerSwitchThemeProps = {
    theme: themeType | undefined;
    setTheme: React.Dispatch<React.SetStateAction<themeType | undefined>>;
    setSwitchTheme: React.Dispatch<React.SetStateAction<boolean>>;
    icons: iconsType | boolean | undefined;
    setIcon: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
    switchStyles: switchStylesProps | undefined;
    darkmode: any;
};

export declare type iconsType = [
    {
    theme: themeType;
    icon: JSX.Element;
},
    {
    theme: themeType;
    icon: JSX.Element;
}
];

export declare type switchMod = "dinamic" | "static";

export declare type switchStylesProps = [
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

export declare type themeType = "Light" | "Dark";

export { }
