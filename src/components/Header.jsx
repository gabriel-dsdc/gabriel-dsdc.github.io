import { NavLink } from "react-router-dom";
import TranslatedText from "../i18n/TranslatedText";
import enSelected from '../images/flagIcons/en-selected.png';
import ptSelected from '../images/flagIcons/pt-selected.png';
import translations from '../i18n/translations.json';

function Header({ languageToggle, currentLang }) {
  const themeToggle = ({ target: { parentElement: { dataset } } }) => {
    document.documentElement.classList.toggle('dark');
    if (localStorage.getItem('theme') === 'dark' || !('theme' in localStorage)) {
      dataset.theme = translations[currentLang].light;
      localStorage.setItem('theme', 'light');
    } else {
      dataset.theme = translations[currentLang].dark;
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <header className="flex justify-between">
      <span content={`${currentLang !== 'en' ? 'Language' : 'Idioma'}`} className="after:content-[attr(content)] after:absolute after:ml-2">
        <img className="w-10 h-10 self-center ml-3 mt-3 cursor-pointer" src={currentLang === 'en' ? enSelected : ptSelected } alt="language flag" onClick={ languageToggle } />
      </span>
      <nav className="w-full">
        <ul className="h-full flex justify-center items-center">
          <li className="font-bold">
            <NavLink to="#home" className="p-4 dark:hover:bg-neutral-700 hover:bg-zinc-200">
              <TranslatedText id="home" />
            </NavLink>
          </li>
          <li className="font-bold">
            <NavLink to="#projects" className="p-4 dark:hover:bg-neutral-700 hover:bg-zinc-200">
              <TranslatedText id="projects" />
            </NavLink>
          </li>
        </ul>
      </nav>
      <label htmlFor="theme-toggle" data-theme={`${document.documentElement.classList.contains('dark') ? translations[currentLang].dark : translations[currentLang].light}`} className="h-min pt-3 pr-3 after:content-[attr(data-theme)] after:absolute after:block">
        <i className="fa-solid fa-yin-yang animate-spin cursor-pointer text-4xl" />
        <input
          id="theme-toggle"
          type="checkbox"
          className="hidden"
          onClick={(e) => themeToggle(e)}
        />
      </label>
    </header>
  );
}

export default Header;
