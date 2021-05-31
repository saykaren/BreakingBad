import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchURL from "./../useQuery/fetchUrl";
import Table from "./Table";
import Mock_Data from "./../Testing/Mock_Data";

const Main = () => {
  const [characterURL, setCharacterURL] = useState(
    "https://breakingbadapi.com/api/characters"
  );

  const characterData = useQuery(["character", `${characterURL}`], fetchURL);
  return (
    <div>
      <Table dataSet={characterData} />
      {/* <Table dataSet={Mock_Data}/> */}
    </div>
  );
};

export default Main;
