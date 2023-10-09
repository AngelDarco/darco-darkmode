import { handlerStylesProps, iconsType, themeType } from "./types";
import defaultProps from "./defaultProps";

export default class DarkMode {
    /**
   * Returns a MediaQueryList object representing the user's preference for dark theme.
   *
   * @return {MediaQueryList} The MediaQueryList object representing the user's preference for dark theme.
   */
  private userDarkTheme(): MediaQueryList {
    return window.matchMedia("(prefers-color-scheme: dark)");
  }

    /**
   * Applies the specified theme styles to the given set of elements.
   *
   * @param {themeType} theme - The theme to apply.
   * @param {handlerStylesProps} styles - The array with the dark and light objects of styles to apply.
   * @return {void} This function does not return a value.
   */
  changePropsStyles(theme: themeType, styles: handlerStylesProps): void {
    const addStyles = (arrVariables: string[], arrValues: string[]) => {
      for (let i = 0; i < arrVariables.length; i++) {
        const variables = arrVariables[i];
        const values = arrValues[i];

        const root: HTMLDivElement | null = document.querySelector(":root");
        root?.style.setProperty(variables, values);
      }
    };

    const currentTheme: themeType = this.changeMode(theme);

    const light = styles[0].theme === "Light" ? styles[0] : styles[1];
    const dark = styles[0].theme === "Dark" ? styles[0] : styles[1];

    if (currentTheme !== "Light") addStyles(light.variables, light.values);
    else addStyles(dark.variables, dark.values);
  }

  /**
   * Change the mode of the theme.
   *
   * @param {themeType} theme - The current theme mode.
   * @return {themeType} The updated theme mode.
   */
  changeMode(theme: themeType): themeType {
    if (theme !== "Dark") return "Dark";
    else return "Light";
  }

    /**
   * Detects the theme of the user.
   *
   * @return {themeType} The theme detected: "Dark" or "Light".
   */
  detectUserTheme(): themeType {
    if (this.userDarkTheme().matches) return "Dark";
    else return "Light";
  }

  /**
   * Retrieves or sets the dark mode preference from local storage.
   *
   * @param {themeType} theme - The theme to set as the dark mode preference.
   * @return {themeType | undefined} The dark mode preference retrieved from local storage, or undefined if no preference is set.
   */
  storageDarkmodePreference(theme?: themeType): themeType | undefined {
    const storage = window.localStorage.getItem("dark-mode") ?? undefined;
    if (!theme) return storage as themeType;
    else window.localStorage.setItem("dark-mode", theme);
  }

  /**
   * Handles the icons based on the theme.
   *
   * @param {themeType} theme - The theme type Light or Dark.
   * @param {iconsType} icons - The object with the dark and light theme and the icons .
   * @return {string | undefined} The icon based on the theme, or undefined if no matching icon is found.
   */
  handlerIcons(theme: themeType, icons?: iconsType) {
    if (icons && theme) {
      const darkTheme =
        icons[0].theme === "Dark" ? icons[0].theme : icons[1].theme;
      const lightTheme =
        icons[1].theme === "Light" ? icons[1].theme : icons[0].theme;

      const darkIcon = icons[0].icon;
      const lightIcon = icons[1].icon;

      if (theme === darkTheme) return darkIcon;
      else if (lightTheme === theme) return lightIcon;
      else return undefined;
    }
  }

  /**
 * A function that handles the default switch theme.
 *
 * @return {Object} An object containing the default styles and icons.
 */
  handlerDefaultSwitchTheme() {
    const { defaultStyles, icons } = defaultProps();
    return { defaultStyles, icons };
  }
}
