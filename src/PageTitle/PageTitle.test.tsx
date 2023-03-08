// Generated with util/create-component.js
import React from "react";
import { render } from "@testing-library/react";
import PageTitle from "./PageTitle";
import { PageTitleProps } from "./PageTitle.types"; 
describe("Test Component", () => {
  let props: PageTitleProps;
  beforeEach(() => {
    props = {
      title: "harvey was here",
    };
  });
  const renderComponent = () => render(<PageTitle {...props} />);

  it("should render foo text correctly", () => {
    props.title= "harvey was here"
    const { getByTestId } = renderComponent();
    const component = getByTestId("PageTitle");
    expect(component).toHaveTextContent("harvey was here");
  });
});
