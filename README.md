# Dark mode switch theme

## Customizable Dark Mode Component

The "Customizable Dark Mode Component" is a versatile React component designed to effortlessly integrate dark mode functionality into your web applications. With this component, you can easily switch between light and dark themes while allowing customization through various props.

https://github.com/AngelDarco/darco-darkmode/assets/29819444/9440a74f-f429-4ba5-883a-774c656ca3f9

## Features

- **Dark Mode Switching**: Seamlessly switch between light and dark themes with a straightforward user interface.

- **Custom Icons**: Customize icons for both light and dark modes using the `icons` prop. Easily set different icons based on the chosen theme.

- **Custom Styles**: Tailor the appearance of the dark mode switch and other interface elements with the `styles` prop. You can define specific styles for the main container, switch container, and icons container.

- **CSS Variables Control**: Use the `switchStyles` prop to dynamically adjust CSS variables when switching between themes. This feature enables you to fine-tune the look and feel of your application in different themes.

- **Switch Mode**: Choose between "dynamic" and "static" dark mode switching modes, allowing you to determine the behavior of the dark mode transition.

- **Hover Effects**: Enable or disable hover effects in dark mode with the `hover` prop, granting you control over how user interactions are presented in different themes.

## Installation

```bash
   npm i darco-dark-mode
```

## Prop Types

### `CustomStyles`

- `mainContainer?: CSSProperties`: Optional custom styles for the main container.
- `switchContainer?: CSSProperties`: Optional custom styles for the switch container.
- `iconsContainer?: CSSProperties`: Optional custom styles for the icons container.

### `switchMod`

- `"dinamic"`: Dynamic dark mode switching.
- `"static"`: Static dark mode switching.

### `darkmodeProps`

- `switchStyles?: SwitchStyles `: An array of two objects specifying styles for different themes.
- `icons?:`: An array of objects specifying icons for different themes.
- `SwitchMode?: `: The mode of dark mode switching ("dynamic" or "static").
- `styles?: `: Custom CSS.Properties styles for the switch component.
- `hover?: `: Specifies whether hover effects should be applied in dark mode.

### `themeType`

- `"Light"`: Light theme.
- `"Dark"`: Dark theme.

### `SwitchStyles`

An array of two objects specifying styles for different themes:

- `theme`: The theme type ("Light" or "Dark").
- `variables`: An array of CSS variable names to change.
- `values`: An array of corresponding values to set for the CSS variables.

### `Icons`

An array of two objects specifying icons for different themes:

- `theme`: The theme type ("Light" or "Dark").
- `icon`: The icon to display as a JSX element.

### `isDark`

- a callback funtion to handle the current state

## Usage

You can use these types in your React application to ensure type safety when dealing with custom styles and dark mode configurations.

Example usage in a component:

`icons: ` (Type: Icons | boolean):

- Customize icons for light and dark themes.

## Example of icons use:

```javascript
import { Icons } from "darco-dark-mode/types";
import Darkmode from "darco-dark-mode";

const customIcons: Icons = [
  {
    theme: "Light",
    icon: <LightIcon />, // or a svg icon
  },
  {
    theme: "Dark",
    icon: <DarkIcon />, // or a svg icon
  }
]

const App = () => {
  return (
    <Darkmode icons={customIcons}/>
     // or
    <Darkmode icons /> // to use the default icons
  )
}
```

#

### Example to switch styles:

`switchStyles: ` (Type: SwitchStyles):

Adjust CSS variables dynamically when switching themes.
Example:

```css
/* your CSS styles */
:root {
  --bg-color: red;
  --color: blue;
}
body {
  background-color: var(--bg-color);
  color: var(--color);
}
```

- This will change your CSS variables when switching between light and dark themes

```javascript
import Darkmode, { SwitchStyles } from "darco-dark-mode";

const switchStylesVariables: SwitchStyles = [
  {
    theme: "Light",
    variables: ["--bg-color", "--color"],
    values: ["white", "black"],
  },
  {
    theme: "Dark",
    variables: ["--bg-color", "--color"],
    values: ["black", "white"],
  },
];

const App = () => {
  return <Darkmode switchStyles={switchStylesVariables} />;
};
```

#

### Example to customize the switch button:

`Styles: ` (Type: CSSProperties):

- Custom styles for the main container.
- Custom styles for the switch container.
- Custom styles for the icons container.

you can customize the styles for the main container, switch container, and icons container, passing an object with CssProperties to the `styles` prop.

```javascript
import Darkmode, { CustomStyles } from "darco-dark-mode";

const customStyles: CustomStyles = {
      mainContainer: {
        background: "red",
        border: "none"
        /* more custom styles for the main container*/
      },
      switchContainer: {
        background: "purple",
        borderRadius: "10px"
        /* more custom styles for the switch container */

      },
      iconsContainer: {
        color: "red",
        justifyContent: "center",
        alignItems: "center"
        /* more custom styles for the icon container */
      }
    },

const App = () => {
  return (
    <Darkmode styles={customStyles}/>
  )
}
```

#

### Example of use of the `isDark` prop

```javascript
import { useState } from "react";
import Darkmode from "./components/Darkmode";

function App() {
  const [theme, setTheme] = useState("");

  const myCurrentTheme = (e: string) => {
    setTheme(e);
  };

  return (
    <div className="App">
      <Darkmode isDark={myCurrentTheme} />
      <h1>DarkMode working on it ...</h1>
      <h2>my theme is {theme}</h2>
    </div>
  );
}
```
