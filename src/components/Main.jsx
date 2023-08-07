import Home from "../pages/Home";
import Projects from '../pages/Projects';
import reposExtras from '../components/data/repos.json';

function Main({ repos, isFetching }) {
  return (
    <>      
      <main id="home" className="leading-normal mt-0 mb-36 mx-auto pt-8 px-4 xl:max-w-screen-xl">
        <Home />
        <Projects repos={repos} reposExtras={reposExtras} isFetching={isFetching} />
      </main>
    </>
  );
}

export default Main;
