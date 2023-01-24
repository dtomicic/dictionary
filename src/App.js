import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import PartOfSpeech from "./Components/PartOfSpeech/PartOfSpeech";
import Search from "./Components/Search/Search";
import Word from "./Components/Word/Word";
import classNames from "classnames";

export const UserContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState("light");
  const [font, setFont] = React.useState("Serif");
  const [search, setSearch] = React.useState("");
  const [data, setData] = React.useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = async () => {
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`
    );
    const data = await response.json();
    setData(data);
  };

  console.log(
    data.length > 0 && data[0].meanings[0].definitions.map((e) => e.definition)
  );

  if (theme === "light") {
    document.body.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "#1e1e1e";
  }

  return (
    <div
      className={classNames("app", {
        "app--light": theme === "light",
        "app--dark": theme === "dark",
        "app--serif": font === "Serif",
        "app--sserif": font === "Sans-Serif",
        "app--monospace": font === "Monospace",
      })}
    >
      <UserContext.Provider value={{ theme, setTheme, font, setFont }}>
        <Navigation />
        <Search
          search={search}
          handleSearch={handleSearch}
          handleClick={handleClick}
        />
        {data.length > 0 ? (
          <>
            <Word data={data} />
            <PartOfSpeech part={"noun"} data={data} />
            {data[0].meanings[1] && <PartOfSpeech part={"verb"} data={data} />}
          </>
        ) : (
          <div className={"noData"}>
            <h1 className={"noDataHeader"}>Try searching for a word</h1>
          </div>
        )}
      </UserContext.Provider>
    </div>
  );
}

export default App;
