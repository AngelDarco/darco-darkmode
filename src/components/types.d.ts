export type themeType = "Light" | "Dark" | undefined;
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