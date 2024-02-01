const SystemThemeListener = () => {
  const [isDarkMode, setIsDarkMode] = useState(darkModeQuery.matches);

  useEffect(() => {
    const changeThemeBySystem = (event: MediaQueryListEvent) =>
      setIsDarkMode(event.matches);

    darkModeQuery.addEventListener("change", changeThemeBySystem);

    return () =>
      darkModeQuery.removeEventListener("change", changeThemeBySystem);
  }, []);
};

export default SystemThemeListener;
