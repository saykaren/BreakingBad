import { render, screen } from "@testing-library/react";
import Main from "./../App/Main";
import React from "react";
import Table from "./../App/Table";
import { shallow } from "enzyme";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

describe("rendering Main components", () => {
  it("It renders Main component without crashing", () => {
    shallow(
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    );
  });
});
