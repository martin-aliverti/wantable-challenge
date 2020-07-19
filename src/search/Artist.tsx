import React, { useState } from "react";
import { Artist } from "../services/ArtistService";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ArtistHeader from "./ArtistHeader";

type Props = {
  data: Artist;
};

export default ({ data }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = () => setExpanded((expanded) => !expanded);
  return (
    <Accordion expanded={expanded} onChange={handleChange}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <ArtistHeader name={data.name} listeners={data.listeners} />
      </AccordionSummary>
      <AccordionDetails>{data.listeners}</AccordionDetails>
    </Accordion>
  );
};
