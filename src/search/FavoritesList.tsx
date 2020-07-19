import React from "react";
import { Typography, Card } from "@material-ui/core";
import { useFavorites } from "../hooks/useFavorites";
import { Artist } from "../services/ArtistService";

export default () => {
  const { favoriteArtists } = useFavorites();
  return (
    <Card style={{ padding: 20 }}>
      <Typography variant="h6">Your Favorite Artists</Typography>
      {favoriteArtists.length
        ? renderFavorites(favoriteArtists)
        : renderEmpty()}
    </Card>
  );
};

const renderFavorites = (favorites: Artist[]) =>
  favorites.map((artist) => (
    <Typography key={`fav_${artist.name}_${artist.mbid}`} variant="body2">
      {artist.name}
    </Typography>
  ));

const renderEmpty = () => (
  <Typography variant="body1">No favorites yet!</Typography>
);
