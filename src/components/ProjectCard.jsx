import TranslatedText from "../i18n/TranslatedText";
import stacks from "./data/stacks.json";

function ProjectCard({
  title,
  description,
  url,
  repoExtra: { techs, previewImg, previewUrl },
}) {
  return (
    // <div className="max-w-sm w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 my-1 mx-1 bg-white shadow-xl rounded-lg overflow-hidden">
    <div
      className={`group m-0 my-1 mx-1 border-t border-x bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden ${
        previewImg && "pj-card-size"
      }`}
    >
      <div
        className={`bg-cover bg-center ${
          previewImg && "pj-card-img-size"
        } pt-4 pr-4`}
        style={{
          backgroundImage: `url(${
            previewImg.includes("://")
              ? previewImg
              : require(`../${previewImg}`)
          })`,
        }}
      >
        <div className="flex justify-end">
          <a href={previewUrl} target="_blank" rel="noreferrer">
            <button className="bg-white text-black dark:text-white dark:bg-neutral-700 border-neutral-700 rounded-md px-4 hover:invert hover:font-extrabold dark:hover:invert-[.80]">
              <TranslatedText id="open" /> app
            </button>
            {/* <img
              className="h-6 w-6 text-white fill-current"
              src={OpenExternalLinkIcon}
              alt="open external link icon"
            /> */}
          </a>
          <a href={url} className="ml-4" target="_blank" rel="noreferrer">
            <button className="bg-white text-black dark:text-white dark:bg-neutral-700 border-neutral-700 rounded-md px-4 hover:invert hover:font-extrabold dark:hover:invert-[.80]">
              <TranslatedText id="open" /> repo
            </button>
          </a>
        </div>
      </div>

      <div
        className={`bg-zinc-300 dark:bg-zinc-800 ${
          previewImg && "group-hover:-translate-y-[117px] transition"
        }`}
      >
        <div className="px-4 py-2 max-h-[60px]">
          <div className="flex justify-between">
            <h1 className="uppercase tracking-wide text-sm font-bold">
              {title}
            </h1>
            {/* <button
              className="bg-white text-black dark:text-white dark:bg-black border-neutral-700 rounded-md px-4"
              onClick={() => {
                setPreviewInfo({ title, previewUrl });
                setShowPreview(true);
              }}
            >
              iframe
            </button> */}
          </div>
          <p className="overflow-hidden">{description || "\u00A0"}</p>
        </div>

        <div className="bg-zinc-200 dark:bg-neutral-700 border-t border-gray-300 p-4">
          <h2 className="text-xs uppercase font-bold text-gray-600 dark:text-white tracking-wide mb-1">
            Techs
          </h2>
          <div className="flex flex-wrap justify-around max-h-[68px] h-[68px] overflow-y-auto">
            {techs.map((techName) => {
              const [, { name, icon }] = Object.entries(stacks).find(
                (entry) => entry[0].toLowerCase() === techName.toLowerCase()
              );
              return (
                <div key={name} className="flex flex-col items-center">
                  <img
                    className="h-9 w-9"
                    src={require(`../images/techIcons/${icon}`)}
                    title={name}
                    alt={name}
                  />
                  <p>{name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
