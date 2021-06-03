import { render, screen } from "@testing-library/react";
import React, { useState as useStateMock } from "react";
import Table from "./../App/Table";
import { shallow, mount } from "enzyme";
import Mock_Data from "./Mock_Data";
import fetchURL from "../useQuery/fetchUrl";
import Modal from "../App/Modal";

const dataHere = fetchURL("https://breakingbadapi.com/api/characters");
const testModal = false;
const mockCallBack = jest.fn();
const setModal = jest.fn();
// const setModal = ()=>{
//    testModal = !testModal;
// }

describe("Render Modal", () => {
  const wrapper = shallow(<Modal modalData={Mock_Data} setModal={setModal} modal={testModal} />);
const button = wrapper.find('#modal_close');

  it("Click button", ()=> {
     expect(wrapper.exists("#modal_close")).toEqual(true); 
     button.simulate('click');
     expect(setModal.mock.calls.length).toEqual(1);
    //  React.useState

  })

  //   const table = wrapper.find("table");
//   const row = table.find("tr");
//   const node = table.find("td");
//   const modal = wrapper.find(".modal");

//   it("table grid", () => {
//     expect(table).toHaveLength(1);
//     expect(row).toHaveLength(64);
//   });

//   it("Modal", () => {
//     expect(wrapper.exists(".modalPicture")).toEqual(false);
//     expect(wrapper.exists(".modal")).toEqual(false);

//     expect(node.last().props().id).toEqual("Julie Minesci");
//     expect(node.at(1).props().id).toEqual("Adam Pinkman");
//   });

//   it("Modal Activate", () => {
//     table.find("tr").at(3).simulate("click");
//     // expect(wrapper.exists(".modal")).toEqual(true);
//     expect(node.at(9).props().id).toEqual("Bogdan Wolynetz");
//   });
});
