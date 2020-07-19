import React from "react";
import "./App.css";
import SearchScreen from "./search/SearchScreen";
import { ProvideFavorites } from "./hooks/useFavorites";
import FavoritesList from "./search/FavoritesList";

function App() {
  return (
    <div style={styles.container}>
      <ProvideFavorites>
        <FavoritesList />
        <SearchScreen />
      </ProvideFavorites>
    </div>
  );
}

export default App;

const styles = {
  container: {
    width: 500,
    padding: 20,
  },
};
