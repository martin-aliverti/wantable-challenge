import React, { useState, useEffect } from "react";
import { Typography, TextField } from "@material-ui/core";
import ArtistService, { Artist as ArtistType } from "../services/ArtistService";
import useDebounce from "../hooks/useDebounce";
import Artist from "./Artist";

export default () => {
  const [artists, setArtists] = useState<ArtistType[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebounce(searchQuery, 500);

  const handleChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    debouncedQuery.length &&
      ArtistService.search(debouncedQuery).then(setArtists);
  }, [debouncedQuery]);

  return (
    <>
      <Typography variant="h6">Search for your favourite artists!</Typography>
      <TextField
        placeholder="Artist name"
        onChange={handleChange}
        value={searchQuery}
        style={{ width: "100%" }}
      />
      {artists.map((artist) => (
        <Artist key={`artist_${artist.name}_${artist.mbid}`} artist={artist} />
      ))}
    </>
  );
};
