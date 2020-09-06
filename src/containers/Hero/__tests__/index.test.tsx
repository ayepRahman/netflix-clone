// import useAxios from 'axios-hooks'

// jest.mock('axios-hooks')

// // in your test
// useAxios.mockReturnValue([{ data: { ... } }])

import "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";
import "jest-styled-components";
import React from "react";
import { ThemeProvider } from "styled-components";
import { render } from "@testing-library/react";

import Hero from "../index";
import theme from "styles/theme";

const defaultComponentProps = {};

const renderComponent = ({ ...props }) =>
  render(
    <ThemeProvider theme={theme}>
      <Hero {...defaultComponentProps} {...props} />
    </ThemeProvider>
  );

describe("<Hero />", () => {
  it("should render on load", () => {
    const {} = renderComponent({});
    expect(true).toBe(true);
  });
});
