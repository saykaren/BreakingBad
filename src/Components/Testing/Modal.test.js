import { render, screen } from "@testing-library/react";
import React, { useState as useStateMock } from "react";
import Table from "./../App/Table";
import { shallow, mount } from "enzyme";
import Mock_Data from "./Mock_Data";
import fetchURL from "../useQuery/fetchUrl";
import Modal from "../App/Modal";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
const dataHere = fetchURL("https://breakingbadapi.com/api/characters");
const testModal = true;
const mockCallBack = jest.fn();
const setModal = jest.fn();
const wrapper = shallow(
  <QueryClientProvider client={queryClient}>
    <Modal modalData={Mock_Data} setModal={setModal} modal={testModal} />
  </QueryClientProvider>
);
const modalComponent = wrapper.find(".modal");
const button = modalComponent.find("#modal_close");
// const setModal = ()=>{
//    testModal = !testModal;
// }

describe("Render Modal", () => {
  it("It finds the class modal on the modal component", () => {
    expect(wrapper.find(".modal"));
  });

  it("It finds the modal close image", () => {
    expect(modalComponent.find("#modal_close"));
  });

  it("It clicks button to check call", () => {
    // button.simulate('click')
    // expect(setModal.mock.calls.length).toEqual(1);
    //  React.useState
  });

  it("It renders the modal picture", () => {
    expect(modalComponent.exists(".modalPicture")).toBeTruthy;
    expect(modalComponent.exists(".modal_close")).toBeTruthy;
  });
});
