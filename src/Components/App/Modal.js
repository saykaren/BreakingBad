import React, { useState } from "react";
import { useQuery } from "react-query";
import fetchQuotes from "../useQuery/fetchQuotes";
import cancel from "./../Assets/cancel.png";

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
        <>
          <>
            {modalData ? (
              <div className="modal">
                <section>
                  <img
                    src={modalData.img}
                    alt="CharacterPicture"
                    className="modalPicture"
                  />
                  <img
                    src={cancel}
                    alt="minimize"
                    onClick={() => setModal(!modal)}
                    className="smallIcon floatRight"
                    id="modal_close"
                  />
                </section>
                <section className="modal_header">
                  <span className="modal_title modal_header_title">
                    {modalData.name}
                  </span>
                </section>

                {modalData.status === "Deceased" &&
                  deathEventData.isSuccess &&
                  deathEventData.data.length > 0 && (
                    <section className="modal_details">
                      <div className="modal_list">
                        <span className="modal_title">Cause of Death: </span>
                        {deathEventData.data[0].cause}
                      </div>
                      <div className="modal_list">
                        <span className="modal_title">Killer: </span>
                        {deathEventData.data[0].responsible}
                      </div>
                      <div className="modal_list">
                        <span className="modal_title">Last Words: </span>
                        <span className="modal_quote">
                          "{deathEventData.data[0].last_words}"
                        </span>
                      </div>
                    </section>
                  )}
                {quoteData.status && quoteData.data && quoteData.data[1] && (
                  <section className="modal_details">
                    {modalData.birthday !== "Unknown" && (
                      <div className="modal_list">
                        <span className="modal_title">Birthday</span>
                        {modalData.birthday}{" "}
                      </div>
                    )}
                    <div className="modal_list">
                      <span className="modal_title">Dead or Alive: </span>
                      {modalData.status}
                    </div>
                    <div className="modal_quote">
                      "
                      {
                        quoteData.data[
                          `${Math.floor(
                            Math.random() * (quoteData.data.length - 1) + 1
                          )}`
                        ].quote
                      }
                      "
                    </div>
                  </section>
                )}
              </div>
            ) : (
              <div>no record</div>
            )}
          </>
        </>
      )}
    </>
  );
};

export default Modal;
