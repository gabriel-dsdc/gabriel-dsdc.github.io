import './App.css';
import { useEffect, useState } from 'react';
import Footer from "./components/Footer";
import Header from './components/Header';
import { LANGUAGES } from './i18n/languages';
import Main from './components/Main';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [repos, setRepos] = useState([{ name: '', homepage: '' }]);
  const [isFetching, setIsFetching] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const hlQuery = searchParams.get('hl');
  const currentLanguage = JSON.parse(localStorage.getItem('locale')) || Object.values(LANGUAGES).find((lang) => lang.includes(window.navigator.language.split('-')[0])) || LANGUAGES.default;

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    if (hlQuery) {
      const languageCode = LANGUAGES[hlQuery] || LANGUAGES[`${hlQuery.split('-')[0]}-BR`];
      localStorage.setItem('locale', JSON.stringify(languageCode));
    } else {
      localStorage.setItem('locale', JSON.stringify(currentLanguage));
      setSearchParams({ hl: currentLanguage });
    }

    if (repos[0].name === '') {
      fetch('https://api.github.com/user/100052594/repos').then(response => response.json()).then(data => setRepos(data))
        .catch((err) => { console.error(err.message) }).finally(() => setIsFetching(false));
    }
  }, [repos, hlQuery, currentLanguage, setSearchParams]);

  const languageToggle = () => {
    const newLang = currentLanguage === 'en' ? 'pt-BR' : 'en';
    localStorage.setItem('locale', JSON.stringify(LANGUAGES[newLang]));
    setSearchParams({ hl: newLang });
  };

  return isFetching || (
    <>
      <Header languageToggle={ languageToggle } currentLang={ currentLanguage } />
      <Main repos={repos} isFetching={isFetching} />
      <Footer githubUsername={repos[0].name} githubLink={repos[0].homepage} />
    </>
  )
}

export default App;
