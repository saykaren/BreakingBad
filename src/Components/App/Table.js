import React, { useState } from "react";
import TableHeaderSorter from "./TableHeaderSorter";
import Modal from "./Modal";

const Table = ({ dataSet }) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [sortWhat, setSortWhat] = useState({
    sortItemOne: `a`,
    keyItem: "name",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const modalCheck = (e) => {
    setModalData(e);
    if (modal === false) {
      setModal(true);
    }
  };

  const sortable = (keyWord, orderOne) => {
    setSortWhat({
      sortItemOne: `${orderOne}`,
      keyItem: `${keyWord}`,
    });
  };

  return (
    <>
      {modal && (
        <Modal modalData={modalData} setModal={setModal} modal={modal} />
      )}
      <table id="table">
        <thead>
          <tr>
            <th colSpan="4">
              Breaking Bad
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.currentTarget.value)}
                placeholder="Search Page"
              />
            </th>
          </tr>
          <tr>
            <th>Character Id</th>
            <TableHeaderSorter
              title="Charcter Name"
              sortWhat={sortWhat}
              headerSort="name"
              sortable={sortable}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
            <TableHeaderSorter
              title="Nickname"
              sortWhat={sortWhat}
              headerSort="nickname"
              sortable={sortable}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
            <TableHeaderSorter
              title="Actor"
              sortWhat={sortWhat}
              headerSort="portrayed"
              sortable={sortable}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
          </tr>
        </thead>
        <tbody>
          {dataSet.data &&
            dataSet.data
              .filter(
                (item) =>
                  item.name
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  item.nickname
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  item.portrayed
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase()) ||
                  item.char_id
                    .toString()
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
              )
              .sort((a, b) =>
                sortWhat.sortItemOne === "a"
                  ? a[`${sortWhat.keyItem}`].localeCompare(
                      b[`${sortWhat.keyItem}`]
                    )
                  : b[`${sortWhat.keyItem}`].localeCompare(
                      a[`${sortWhat.keyItem}`]
                    )
              )
              .map((item, indexData) => (
                <tr key={indexData} onClick={() => modalCheck(item)}>
                  <td id={item.char_id}>{item.char_id}</td>
                  <td id={item.name}>{item.name}</td>
                  <td id={item.nickname}>{item.nickname}</td>
                  <td id={item.portrayed}>{item.portrayed}</td>
                </tr>
              ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
