import React from "react";
import { Typography } from "@material-ui/core";

type Props = {
  name: string;
  listeners: string;
};

export default ({ name, listeners }: Props) => (
  <div style={styles.container}>
    <Typography>{name}</Typography>
    <Typography>{`listeners: ${listeners}`}</Typography>
  </div>
);

const styles = {
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
  },
};
