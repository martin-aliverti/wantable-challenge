import React, { useState, useEffect } from "react";
import { Typography, CircularProgress, Button } from "@material-ui/core";
import ArtistService, { ArtistDetail } from "../services/ArtistService";

type Props = {
  name: string;
  doLoad: boolean;
};

export default ({ name, doLoad }: Props) => {
  const [details, setDetails] = useState<ArtistDetail | null>(null);
  const [expanded, setExpanded] = useState(false);
  const handleExpansion = () => setExpanded((expanded) => !expanded);

  useEffect(() => {
    !details && doLoad && ArtistService.getDetails(name).then(setDetails);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [doLoad, name]);

  return details
    ? renderDetails(details, expanded, handleExpansion)
    : renderLoader();
};

const renderDetails = (
  details: ArtistDetail,
  expanded: boolean,
  handleExpansion: () => void
) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <Typography>
      {expanded ? details.bio.content : details.bio.summary}
    </Typography>
    <Button onClick={handleExpansion}>
      {expanded ? "read less" : "read more"}
    </Button>
  </div>
);

const renderLoader = () => <CircularProgress />;
