import App from "./../App/App";
import React from "react";
import { shallow } from "enzyme";

describe("rendering App components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
});
