/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import styles from "./darkmode.module.css";
import { customStyleProps, themeType } from "./types";
import DarkMode from "./DarkMode";

type darkmodeProps = {
  switchStyles?: customStyleProps;
  icons: object[]
}

const Darkmode = (props: darkmodeProps) => {
const { switchStyles, icons } = props;
const darkmode = new DarkMode();

  const [theme, setTheme] = useState<themeType>();
  const [switchTheme, setSwitchTheme] = useState(false);

  useEffect(() => {
    // recover theme storage.
    const storagedTheme = darkmode.storageDarkmodePreference();
    
    if (!storagedTheme && !theme) {setTheme(darkmode.detectUserTheme());
    }else if(storagedTheme && !theme){ setTheme(storagedTheme);
    }else
    if(theme){
    if (switchStyles) darkmode.changePropsStyles(theme, switchStyles);
    else darkmode.changeDefaultStyles(theme);
    darkmode.storageDarkmodePreference(theme);
  }
}, [theme]);


  const handlerSwitchTheme = () => {
    if (theme) setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));

    setSwitchTheme((prev) => !prev);
    darkmode.handlerIcons(icons);


    if(theme){
      if (switchStyles) darkmode.changePropsStyles(theme, switchStyles);
      else darkmode.changeDefaultStyles(theme);
  }
  };

  return (
    <div className={`${styles.darkmodeContainer} ${switchTheme ? styles.switchContainerAnimation : ""}`} onClick={handlerSwitchTheme}>

      <button className={styles.switch}>
        {theme}
      </button>
    </div>
  );
};
export default Darkmode;
