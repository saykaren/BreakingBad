import React, { useMemo, useState } from "react";
import upArrow from "./../Assets/expand_less.png";
import downArrow from "./../Assets/expand_more.png";
import sort from "./../Assets/sort_white.png";
import minimizeIcon from "./../Assets/minimize_white.png";

const Table = ({ dataSet }) => {
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState();
  const [sortWhat, setSortWhat] = useState("name");

  const modalCheck = (e) => {
    setModalData(e);
    if (modal === false) {
      setModal(true);
    }
  };

  const sortable = (e) => {
    // console.log(typeof(e));
    setSortWhat(e);
  };

  return (
    <>
      <button
        className="modalButton"
        disabled={!modalData}
        onClick={() => setModal(!modal)}
      >
        Activate Modal
      </button>
      {modal && modalData && (
        <section className="">
          <div className="modal">
            <img
              src={minimizeIcon}
              alt="minimize"
              onClick={() => setModal(!modal)}
              className="smallIcon floatRight"
            />
            {modalData ? (
              <div>
                <img
                  src={modalData.img}
                  alt="CharacterPicture"
                  className="modalPicture"
                />
                <table id="table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Birthday</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{modalData.name}</td>
                      <td>{modalData.birthday} </td>
                      <td>{modalData.status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div>no record</div>
            )}
          </div>
        </section>
      )}
      <table id="table">
        <thead>
          <tr>
            <th colSpan="4">Breaking Bad {sortWhat}</th>
          </tr>
          <tr>
            <th>
              Character Id{" "}
              {/* <img src={sort} alt="sort" onClick={() => sortable("char_id")} /> */}
            </th>
            <th>
              Character Name{" "}
              <img src={sort} alt="sort" onClick={() => sortable("name")} />
            </th>
            <th>
              Nickname{" "}
              <img src={sort} alt="sort" onClick={() => sortable("nickname")} />
            </th>
            <th>
              Actor{" "}
              <img
                src={sort}
                alt="sort"
                onClick={() => sortable("portrayed")}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {dataSet.data &&
            dataSet.data

              .sort((a, b) => a[`${sortWhat}`].localeCompare(b.name))
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
