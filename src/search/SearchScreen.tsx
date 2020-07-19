import React, { useState, useEffect } from "react";
import { Typography, TextField } from "@material-ui/core";
import ArtistService, { Artist as ArtistType } from "../services/ArtistService";

export default () => {
  const [artists, setArtists] = useState<ArtistType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    searchQuery.length && ArtistService.search(searchQuery).then(setArtists);
  }, [searchQuery]);

  return (
    <div style={styles.container}>
      <Typography>Search for your favourite artists!</Typography>
      <TextField
        placeholder="Artist name"
        onChange={handleChange}
        value={searchQuery}
      />
      {artists.map((artist) => (
        <div>{artist.name}</div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: 500,
    padding: 20,
  },
};
