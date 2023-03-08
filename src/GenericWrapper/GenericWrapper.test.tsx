// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";

import GenericWrapper from "./GenericWrapper";
import { GenericWrapperProps } from "./GenericWrapper.types";

describe("Test Component", () => {
  let props: GenericWrapperProps;

  beforeEach(() => {
    props = {
      foo: "bar"
    };
  });

  const renderComponent = () => render(<GenericWrapper {...props} />);

  it("should render foo text correctly", () => {
    props.foo = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("GenericWrapper");

    expect(component).toHaveTextContent("harvey was here");
  });
});
