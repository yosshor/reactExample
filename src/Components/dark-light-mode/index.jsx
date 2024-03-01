import useLocalStorage from "./useLocalStorage";
import './styles.css'

export default function LightDarkMode() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

    function handleThemeMode(){
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  console.log(`the theme is ${theme}`);
  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello to Dark Light Change Theme</p><br />
        <h4>Theme Mode Change</h4>
        <button onClick={handleThemeMode}>Change Theme</button>
      </div>
    </div>
  );
}
