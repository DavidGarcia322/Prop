import React from "react";
import "./App.css";

import PersonCard from "./components/PersonCard";

function App() {
  return (
    <div id="main-container">
      <PersonCard
        firstName="David"
        lastName="Garcia"
        age={19}
        hairColor="Black"
        hobbies={["Games", "memes"]}
      />
      <PersonCard
        firstName="Angel"
        lastName="Medrano"
        age={19}
        hairColor="Black"
        hobbies={["Games", "Mocking People"]}
      />
    </div>
  );
}

export default App;