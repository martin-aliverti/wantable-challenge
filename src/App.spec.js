import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders search title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Search for your favourite artists!/i);
  expect(linkElement).toBeInTheDocument();
});
