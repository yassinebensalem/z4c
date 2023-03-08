// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import Button from "./Button";
import { ButtonProps } from "./Button.types";

describe("Button with Color", () => {
  let props: ButtonProps;

  beforeEach(() => {
    props = {
      color: "bar",
      foo: "",
    };
  });

  const renderComponent = () => render(<Button {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Button");
  });
});
