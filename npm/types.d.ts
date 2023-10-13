import { CSSProperties } from 'react';

export declare type customStylesProps = {
    mainContainer?: CSSProperties;
    switchContainer?: CSSProperties;
    iconsContainer?: CSSProperties;
};

export declare type darkmodeProps = {
    switchStyles?: switchStylesProps;
    icons?: iconsType | boolean;
    switchMode?: switchMod;
    styles?: customStylesProps;
    hover?: boolean;
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
