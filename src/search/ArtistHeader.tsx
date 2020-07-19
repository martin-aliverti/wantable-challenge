import React, { useState, useEffect } from "react";
import { Typography, IconButton } from "@material-ui/core";
import Favorite from "@material-ui/icons/Favorite";
import UnFavorite from "@material-ui/icons/FavoriteBorder";
import { useFavorites } from "../hooks/useFavorites";
import { Artist } from "../services/ArtistService";

type Props = {
  artist: Artist;
};

export default ({ artist }: Props) => {
  const { favoriteArtists, addFavorite, removeFavorite } = useFavorites();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoriteArtists.includes(artist));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favoriteArtists]);

  const toggleFavorite = () =>
    isFavorite ? removeFavorite(artist) : addFavorite(artist);

  return (
    <div style={styles.container}>
      <IconButton
        size="medium"
        onClick={(event) => {
          event.stopPropagation();
          toggleFavorite();
        }}
      >
        {isFavorite ? <Favorite /> : <UnFavorite />}
      </IconButton>
      <div style={styles.data}>
        <Typography>{artist.name}</Typography>
        <Typography>{`listeners: ${artist.listeners}`}</Typography>
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  data: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 20,
  },
};
