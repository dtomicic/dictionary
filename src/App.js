import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import PartOfSpeech from "./Components/PartOfSpeech/PartOfSpeech";
import Search from "./Components/Search/Search";
import Word from "./Components/Word/Word";

export const UserContext = React.createContext();

function App() {
  const [theme, setTheme] = React.useState("light");
  const [font, setFont] = React.useState("Serif");
  return (
    <div
      className={
        font === "Serif"
          ? `${"app font-serif"}`
          : font === "Sans-Serif"
          ? `${"app font-sserif"}`
          : font === "Monospace"
          ? `${"app font-monospace"}`
          : null
      }
    >
      <UserContext.Provider value={{ theme, setTheme, font, setFont }}>
        <Navigation />
        <Search />
        <Word />
        <PartOfSpeech part={'noun'} />
        <PartOfSpeech part={'verb'} />
      </UserContext.Provider>
    </div>
  );
}

export default App;
