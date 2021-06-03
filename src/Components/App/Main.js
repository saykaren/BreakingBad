import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchURL from "./../useQuery/fetchUrl";
import Table from "./Table";

const Main = () => {
  const [characterURL, setCharacterURL] = useState(
    "https://breakingbadapi.com/api/characters"
  );

  const characterData = useQuery(["character", `${characterURL}`], fetchURL);

  return (
    <div className="main_component">
      <Table dataSet={characterData} />
    </div>
  );
};

export default Main;
