/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import moduleStyles from "../styles/darkmode.module.css";
import type { DarkModeProps, ThemeType } from "../types";
import DarkMode from "../utils/DarkMode";

import handlerSwitchTheme, {
  HandlerSwitchTheme,
} from "../utils/handlerSwitchTheme";

const Darkmode = (props: DarkModeProps) => {
  const { switchStyles, icons, SwitchMode, styles, hover, isDark } = props;
  const darkmode = new DarkMode();

  const [theme, setTheme] = useState<ThemeType>();
  const [switchTheme, setSwitchTheme] = useState(false);
  const [icon, setIcon] = useState<JSX.Element>();

  useEffect(() => {
    // system theme listener
    const { addListener, removeListener } = darkmode.systemThemeListener();
    const fn = () => setTheme(darkmode.detectUserTheme());
    // set system theme listener
    addListener(fn);

    // recover theme storage.
    const storagedTheme = darkmode.storageDarkmodePreference();

    // detect user theme in the browser and localStorage
    if (!storagedTheme && !theme) setTheme(darkmode.detectUserTheme());
    else if (storagedTheme && !theme) setTheme(storagedTheme);
    else if (theme) {
      if (switchStyles) darkmode.changePropsStyles(theme, switchStyles);
      else darkmode.changeMode(theme);

      // set theme in localStorage
      darkmode.storageDarkmodePreference(theme);

      // set icons
      if (icons && theme && typeof icons !== "boolean")
        setIcon(darkmode.handlerIcons(theme, icons));

      // position switch theme
      if (theme === "Dark") setSwitchTheme(true);
    }

    // default values
    if (theme && !switchStyles) {
      const defaultStyles = darkmode.handlerDefaultSwitchTheme().defaultStyles;
      darkmode.changePropsStyles(theme, defaultStyles);
    }
    if (theme && typeof icons === "boolean") {
      const defaultIcons = darkmode.handlerDefaultSwitchTheme().icons;
      setIcon(darkmode.handlerIcons(theme, defaultIcons));
    }

    // set isDark prop
    if (isDark && theme) isDark(theme);

    // remove system theme listener
    return () => removeListener(fn);
  }, [theme]);

  const HandlerSwitchProps: HandlerSwitchTheme = {
    theme,
    setTheme,
    setSwitchTheme,
    icons,
    setIcon,
    switchStyles,
    darkMode: darkmode,
  };

  return (
    <div
      style={styles?.mainContainer}
      className={`${moduleStyles.darkmodeContainer} 
    ${
      SwitchMode === "static"
        ? moduleStyles.staticSwitch
        : switchTheme
        ? moduleStyles.dinamicSwitch
        : moduleStyles.normalSwitch
    }`}
      onClick={() => handlerSwitchTheme(HandlerSwitchProps)}
    >
      <div
        style={styles?.switchContainer}
        className={`${moduleStyles.switch} ${
          !icon
            ? theme === "Dark"
              ? moduleStyles.addDarkBorder
              : theme === "Light"
              ? moduleStyles.addLightBorder
              : ""
            : ""
        } ${
          hover
            ? theme === "Dark"
              ? moduleStyles.switchHoverDark
              : theme === "Light"
              ? moduleStyles.switchHoverLight
              : ""
            : ""
        }`}
      >
        <div style={styles?.iconsContainer} className={moduleStyles.svg}>
          {icon ? icon : theme}
        </div>
      </div>
    </div>
  );
};
export default Darkmode;
