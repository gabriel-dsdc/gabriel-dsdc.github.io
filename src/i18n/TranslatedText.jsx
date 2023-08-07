import translations from './translations.json';

function TranslatedText({ id }) {
  const locale = JSON.parse(localStorage.getItem('locale'));

  return (
    <>{ locale && translations[locale][id] }</>
  );
};

export default TranslatedText;
