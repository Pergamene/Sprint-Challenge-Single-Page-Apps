import React from "react";
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage.js';
import CharacterPage from "./components/CharacterPage.js";

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path="/">
        <WelcomePage />
      </Route>
      <Route exact path="/characters/">
        <CharacterPage />
      </Route>
    </main>
  );
}
