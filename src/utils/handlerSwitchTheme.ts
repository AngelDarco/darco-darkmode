import { HandlerSwitchTheme } from "../types";
const handlerSwitchTheme = (props: HandlerSwitchTheme) => {
  const {
    theme,
    setTheme,
    setSwitchTheme,
    icons,
    setIcon,
    switchStyles,
    darkMode,
  } = props;

  if (theme) setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));

  setSwitchTheme((prev) => !prev);

  // handler icons
  if (icons && theme && typeof icons !== "boolean")
    setIcon(darkMode.handlerIcons(theme, icons));

  // handler switch mode
  if (theme) {
    if (switchStyles) darkMode.changePropsStyles(theme, switchStyles);
    else darkMode.changeMode(theme);
  }
};
export type { HandlerSwitchTheme };
export default handlerSwitchTheme;
