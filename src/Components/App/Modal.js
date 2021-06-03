import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchQuotes from "../useQuery/fetchQuotes";
import minimizeIcon from "./../Assets/minimize_white.png";

const Modal = ({ modalData, modal, setModal }) => {
  const [quoteURL, setQuoteURL] = useState(
    "https://breakingbadapi.com/api/quote?author="
  );
  const testing = modalData.name.replace(" ", "+");
  const quoteData = useQuery(
    ["quotes", `${quoteURL}`, `${testing}`],
    fetchQuotes
  );

  return (
    <>
      {modalData && (
        <section className="">
          <div className="modal">
            <img
              src={minimizeIcon}
              alt="minimize"
              onClick={() => setModal(!modal)}
              className="smallIcon floatRight"
              id="modal_close"
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
                      <td id={`modal${modalData.name}`}>{modalData.name}</td>
                      <td>{modalData.birthday} </td>
                      <td>{modalData.status}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            ) : (
              <div>no record</div>
            )}
            {quoteData.status && quoteData.data && quoteData.data[1] && (
              <cite>
                "
                {
                  quoteData.data[
                    `${Math.floor(
                      Math.random() * (quoteData.data.length - 1) + 1
                    )}`
                  ].quote
                }
                "
              </cite>
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default Modal;
