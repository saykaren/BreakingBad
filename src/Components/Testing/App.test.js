import { render, screen } from "@testing-library/react";
import App from "./../App/App";
import React from "react";
import Table from "./../App/Table";
import Main from "./../App/Main";
import { shallow, mount } from "enzyme";

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  // it("render App component header without crashing", () => {
  //   const wrapper = shallow(<App />);
  //   const mainComponent = (
  //     <div className="App">
  //       <Main />
  //     </div>
  //   );
  //   expect(wrapper.contains(mainComponent)).toEqual(true);
  // });
});
