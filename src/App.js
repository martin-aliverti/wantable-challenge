import React from "react";
import "./App.css";
import SearchScreen from "./search/SearchScreen";
import { ProvideFavorites } from "./hooks/useFavorites";

function App() {
  return (
    <ProvideFavorites>
      <SearchScreen />
    </ProvideFavorites>
  );
}

export default App;
