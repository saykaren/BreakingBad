import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchURL from './../useQuery/fetchUrl';

const Main = () => {
    const [characterURL, setCharacterURL] = useState(
        "https://breakingbadapi.com/api/characters"
      );

      const characterData = useQuery(["character", `${characterURL}`], fetchURL);

  return (
<div>

</div>
  );
}

export default Main;
