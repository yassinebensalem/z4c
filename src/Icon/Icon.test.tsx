// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Icon from "./Icon";

describe("Icon component", () => {
  it("should render the Icon", () => {
    const { getByTestId } = render(
      <Icon fontSize="1.5rem" icon="tabler:layout-grid-add" />
    );
    const storeElement = getByTestId("icon");
    expect(storeElement).toBeInTheDocument();
  });
});
