import React, { useState } from "react";
import { Artist } from "../services/ArtistService";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArtistHeader from "./ArtistHeader";
import ArtistBody from "./ArtistBody";

type Props = {
  artist: Artist;
};

export default ({ artist }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => setExpanded((expanded) => !expanded);
  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ArtistHeader artist={artist} />
      </AccordionSummary>
      <AccordionDetails>
        <ArtistBody name={artist.name} doLoad={expanded} />
      </AccordionDetails>
    </Accordion>
  );
};
