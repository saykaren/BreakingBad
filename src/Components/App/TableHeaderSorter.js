import React, { useMemo, useState } from "react";
import upArrow from "./../Assets/expand_less.png";
import downArrow from "./../Assets/expand_more.png";
import sort from "./../Assets/sort_white.png";

const TableHeaderSorter = ({ title, sortWhat, headerSort, sortable }) => {
  return (
    <th>
      {title}
      <img
        src={
          sortWhat.keyItem === `${headerSort}`
            ? sortWhat.sortItemOne == "b"
              ? upArrow
              : downArrow
            : sort
        }
        alt="sort"
        onClick={() =>
          sortable(
            `${headerSort}`,
            `${sortWhat.sortItemOne === "a" ? "b" : "a"}`
          )
        }
      />
    </th>
  );
};

export default TableHeaderSorter;
