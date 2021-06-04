import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchQuotes from "../useQuery/fetchQuotes";
import minimizeIcon from "./../Assets/minimize_white.png";

const Modal = ({ modalData, modal, setModal }) => {
  const [quoteURL, setQuoteURL] = useState(
    "https://breakingbadapi.com/api/quote?author="
  );
  const [deathURL, setDeathURL] = useState(
    "https://breakingbadapi.com/api/deaths?responsible="
  );

  const [deathEvent, setDeathEvent] = useState(
    "https://breakingbadapi.com/api/death?name="
  );

  const quoteData = useQuery(
    ["quotes", `${quoteURL}`, `${modalData.name.replace(" ", "+")}`],
    fetchQuotes
  );
  const deathResponsibleData = useQuery(
    [
      "deathResponsibleData",
      `${deathURL}`,
      `${modalData.name.replace(" ", "+")}`,
    ],
    fetchQuotes
  );

  const deathEventData = useQuery(
    [
      "deathEvent",
      `${deathEvent}`,
      `${modalData.name.trim().replace(" ", "+")}`,
    ],
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
                      {modalData.birthday !== "Unknown" && <th>Birthday</th>}
                      <th>Status</th>
                      {modalData.status === "Deceased" &&
                        deathEventData.isSuccess &&
                        deathEventData.data.length > 0 && (
                          <>
                            <th>Cause</th>
                            <th>Killer</th>
                            <th>Last Words</th>
                          </>
                        )}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td id={`modal${modalData.name}`}>{modalData.name}</td>
                      {modalData.birthday !== "Unknown" && (
                        <td>{modalData.birthday} </td>
                      )}
                      <td>{modalData.status}</td>
                      {modalData.status === "Deceased" &&
                        deathEventData.isSuccess &&
                        deathEventData.data.length > 0 && (
                          <>
                            <td>{deathEventData.data[0].cause}</td>
                            <td>{deathEventData.data[0].responsible}</td>
                            <td>{deathEventData.data[0].last_words}</td>
                          </>
                        )}
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
