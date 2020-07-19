import React, { useState, useContext, createContext } from "react";
import { Artist } from "../services/ArtistService";

const favoritesContext = createContext<any>(undefined);

type Props = {
  children: React.Component[];
};

export const ProvideFavorites = ({ children }: Props) => {
  const artists = useProvideFavorites();
  return (
    <favoritesContext.Provider value={artists}>
      {children}
    </favoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(favoritesContext);

const useProvideFavorites = () => {
  const [artists, setArtists] = useState<Artist[]>([]);
  const addFavorite = (artist: Artist) =>
    setArtists((artists) => {
      artists.push(artist);
      return [...artists];
    });
  const removeFavorite = (artist: Artist) =>
    setArtists((favorites) =>
      favorites.filter((favorite) => favorite.mbid !== artist.mbid)
    );

  return {
    favoriteArtists: artists,
    addFavorite,
    removeFavorite,
  };
};
