// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import List from "./List";

describe("List component", () => {
  it("should render without errors", () => {
    const { getByTestId } = render(<List />);
    expect(getByTestId("List")).toBeInTheDocument();
  });
});
