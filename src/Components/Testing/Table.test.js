import { render, screen } from "@testing-library/react";
import React from "react";
import Table from "./../App/Table";
import { shallow, mount } from "enzyme";
import Mock_Data from "./Mock_Data";
import fetchURL from "../useQuery/fetchUrl";

const dataHere = fetchURL("https://breakingbadapi.com/api/characters");

describe("Render Table", () => {
  const wrapper = shallow(<Table dataSet={Mock_Data} />);
  const table = wrapper.find("table");
  const row = table.find("tr");
  const node = table.find("td");
  const modal = wrapper.find(".modal");

  it("table grid", () => {
    expect(table).toHaveLength(1);
    expect(row).toHaveLength(64);
  });

  it("Modal", () => {
    expect(wrapper.exists(".modalPicture")).toEqual(false);
    expect(wrapper.exists(".modal")).toEqual(false);

    expect(node.last().props().id).toEqual("Julie Minesci");
    expect(node.at(1).props().id).toEqual("Adam Pinkman");
  });

  it("Modal Activate", () => {
    table.find("tr").at(3).simulate("click");
    expect(node.at(9).props().id).toEqual("Bogdan Wolynetz");
  });
});
