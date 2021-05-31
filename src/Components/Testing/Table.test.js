import { render, screen } from "@testing-library/react";
import React from "react";
import Table from "./../App/Table";
import { shallow } from "enzyme";
import Mock_Data from "./Mock_Data";

describe("rendering components", () => {
  it("renders Table component without crashing", () => {
    shallow(<Table />);
  });
  it("render App component header without crashing", () => {
    const wrapper = shallow(<Table dataSet={Mock_Data}/>);
    const mainComponent = (
        <button
        disabled={!modalData}
        onClick={() => setModal(!modal)}
      >
        Activate Modal
      </button>
    );
    expect(wrapper.contains(mainComponent)).toEqual(true);
  });
});
