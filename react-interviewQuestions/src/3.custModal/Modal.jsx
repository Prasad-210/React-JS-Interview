import React, { useState } from "react";
import "./modalStyle.css";
import CusModal from "./CustModal";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOfferAccepted, setIsOfferAccepted] = useState(false);

  const handleOpenModal = () => {
    // console.log("hhh");
    setIsOpen(true);
  };

  const handleOfferAccept = () => {
    setIsOfferAccepted(true);
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="show-offer">
        {!isOfferAccepted && (
          <button onClick={handleOpenModal} className="offer-btn">
            Show Offer
          </button>
        )}

        
      {
        isOfferAccepted && <h1> You Accepted Offer !!</h1>
      }
      </div>


      {isOpen && (
        <CusModal
          handleOfferAccept={handleOfferAccept}
          handleClose={handleClose}
        />
      )}
    </div>
  );
};

export default Modal;
