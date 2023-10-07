import { customStyleProps, themeType } from "./types";

export default class DarkMode {
    private userDarkTheme(): MediaQueryList {
      return window.matchMedia("(prefers-color-scheme: dark)");
    }
  
    changePropsStyles(theme: themeType, styles: customStyleProps): void {

      const addStyles = (arrVariables: string[], arrValues: string[]) => {
        for (let i = 0; i < arrVariables.length; i++) {
          const variables = arrVariables[i];
          const values = arrValues[i];
  
          const root: HTMLDivElement | null = document.querySelector(":root");
          root?.style.setProperty(variables, values);
        }
      };
  
      const currentTheme: themeType = this.changeDefaultStyles(theme);
  
      const light = styles[0].theme === "Light" ? styles[0] : styles[1];
      const dark = styles[0].theme === "Dark" ? styles[0] : styles[1];
  
      if (currentTheme !== "Light")
        addStyles(light.variables, light.values);
      else addStyles(dark.variables, dark.values);
    }
  
    changeDefaultStyles(theme: themeType): themeType {
        if (theme !== "Dark") return "Dark";
        else return "Light";
        
    }
  
    detectUserTheme(): themeType {
      if (this.userDarkTheme().matches) return "Dark";
      else return "Light";
    }

    storageDarkmodePreference(theme?: themeType): themeType | undefined{
        const storage = window.localStorage.getItem("dark-mode") ?? undefined;
        if(!theme) return storage as themeType;
        else window.localStorage.setItem("dark-mode", theme);
    }

    handlerIcons(icons: object[]){
      console.log(icons)
    }
  }