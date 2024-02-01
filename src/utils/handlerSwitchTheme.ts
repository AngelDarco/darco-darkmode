import { HandlerSwitchThemeProps } from "../types/types";
const handlerSwitchTheme = (props: HandlerSwitchThemeProps) => {
  const {
    theme,
    setTheme,
    setSwitchTheme,
    icons,
    setIcon,
    switchStyles,
    darkmode,
  } = props;

  if (theme) setTheme((prev) => (prev === "Light" ? "Dark" : "Light"));

  setSwitchTheme((prev) => !prev);

  // handler icons
  if (icons && theme && typeof icons !== "boolean")
    setIcon(darkmode.handlerIcons(theme, icons));

  // handler switch mode
  if (theme) {
    if (switchStyles) darkmode.changePropsStyles(theme, switchStyles);
    else darkmode.changeMode(theme);
  }
};
export type { HandlerSwitchThemeProps };
export default handlerSwitchTheme;
