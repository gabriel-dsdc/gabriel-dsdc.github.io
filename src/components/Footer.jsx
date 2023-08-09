import GithubIcon from "../images/github-icon.svg";
import LinkedInIcon from "../images/linkedIn-icon.svg";
import TranslatedText from "../i18n/TranslatedText";

function Footer({ githubUsername, githubLink }) {
  return (
    <footer className="bg-[rgb(17,17,17)] text-white dark:bg-[rgb(17,17,17)] dark:text-white fixed left-0 bottom-0 w-full border-t border-t-gray-500 dark:border-t-gray-500 text-center">
      <ul className="flex justify-center items-center h-12">
        <li className="">
          <a href="https://github.com/gabriel-dsdc">
            <img
              className="w-8 h-8 bg-white p-1 rounded overflow-hidden hover:w-10 hover:h-10"
              src={GithubIcon}
              alt="Github logo"
            />
          </a>
        </li>
        <li className="bg-white rounded overflow-hidden flex justify-center items-center mx-4">
          <a href="https://www.linkedin.com/in/gabrielsdcarvalhaes/">
            <img
              className="w-8 h-8 hover:w-10 hover:h-10"
              src={LinkedInIcon}
              alt="LinkedIn logo"
            />
          </a>
        </li>
      </ul>
      <div>
        <span><TranslatedText id="madeWith" />&nbsp; &nbsp;|&nbsp; &nbsp;</span>
        <span>
          <TranslatedText id="compiledBy" />
          <a href={githubLink} className="font-black" title={githubUsername}>
            {` Gabriel Carvalhães`}
          </a>
          , <TranslatedText id="since" /> 2022&nbsp; &nbsp;|&nbsp; &nbsp;
        </span>
        <span>
          <TranslatedText id="lastUpdated" />: {new Date().toLocaleString([JSON.parse(localStorage.getItem('locale')), "en"], { month: "long", year: "numeric" })}.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
