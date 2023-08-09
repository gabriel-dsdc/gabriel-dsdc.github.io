import ProjectCard from "../components/ProjectCard";
import TranslatedText from "../i18n/TranslatedText";
import stacks from "../components/data/stacks.json";
import { useState } from "react";

function Projects({ repos, reposExtras, isFetching }) {
  const [stack, setStack] = useState("");
  const [type, setType] = useState("");

  const handleStack = (e) => {
    setStack(e.target.value);
  };

  const handleType = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      {isFetching && (
        <h1 className="text-center text-2xl">
          <TranslatedText id="loading" />
          ...
        </h1>
      )}
      <h1 id="projects" className="text-center font-bold mb-2">
        <TranslatedText id="projects" />
      </h1>
      <form className="mb-1 text-center">
        <label htmlFor="selectType" className="sr-only">
          <TranslatedText id="selectType" />
        </label>
        <select
          id="selectType"
          className="mr-1"
          onChange={handleType}
          value={type}
        >
          <option defaultValue value="">
            <TranslatedText id="selectType" />
          </option>
          <option value="Front-end">Front-End</option>
          <option value="Back-end">Back-End</option>
        </select>
        <label htmlFor="selectStack" className="sr-only">
          <TranslatedText id="selectStack" />
        </label>
        <select id="selectStack" onChange={handleStack} value={stack}>
          <option defaultValue value="">
            <TranslatedText id="selectStack" />
          </option>
          {Object.entries(stacks).map((stack) => (
            <option key={stack[0]} value={stack[0]}>
              {stack[1].name}
            </option>
          ))}
        </select>
      </form>
      <section className="projects overflow-hidden columns-3xs sm:columns-3xs md:columns-3xs lg:columns-3xs xl:columns-2xs">
        {/* <section className="projects flex flex-wrap justify-center overflow-hidden"> */}
        {/* grid gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 xl:gap-8 2xl:gap-12 */}
        {reposExtras
          .reduce(
            (acc) => {
              acc = acc.filter((repo) =>
                stack ? repo.techs.includes(stack) : repo
              );
              acc = acc.filter((repo) => (type ? repo.type === type : repo));
              return acc;
            },
            [...reposExtras]
          )
          .map((repoExtra) => {
            const repo = repos.find((repo) => repo.id === repoExtra.id);
            if (repo) {
              const title =
                repo.name[0].toUpperCase() +
                repo.name.replace(/-/g, " ").slice(1);
              return (
                <ProjectCard
                  key={repo.id}
                  title={title}
                  description={repo.description}
                  url={repo.html_url}
                  repoExtra={repoExtra}
                />
              );
            }
            return null;
          })}
      </section>
    </>
  );
}

export default Projects;
