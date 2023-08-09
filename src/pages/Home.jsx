import TranslatedText from "../i18n/TranslatedText";
import stacks from "../components/data/stacks.json";

function Home() {
  return (
    <div className="mb-8">
      <h1 className="text-center font-bold">Gabriel S. D. Carvalhães</h1>
      <section className="max-w-xl mx-auto font-bold">
        <TranslatedText id="aboutMe" />
      </section>
      <br />
      <section>
        <h2 className="text-center font-bold">
          <TranslatedText id="skills" />
        </h2>
        <div className="flex justify-center flex-wrap">
          {Object.values(stacks)
            .filter((stack) => !stack.hidden)
            .map(({ name, icon }) => (
              <div key={name}>
                <img
                  className="h-9 w-9 mx-1 hover:scale-150 peer"
                  src={require(`../images/techIcons/${icon}`)}
                  title={name}
                  alt={name}
                  onClick={
                    name === "MySQL"
                      ? () => window.location.replace("https://www.mysql.com")
                      : undefined
                  }
                  onKeyDown={
                    name === "MySQL"
                      ? (event) => {
                          if (event.key === "Enter") {
                            window.location.replace("https://www.mysql.com");
                          }
                        }
                      : undefined
                  }
                />
                <p className="absolute opacity-0 mt-2 peer-hover:opacity-100">
                  {name}
                </p>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
