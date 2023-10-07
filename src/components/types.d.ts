export type themeType = "Light" | "Dark";
export type customStyleProps = [
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