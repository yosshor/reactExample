import { useState } from "react";
import Modal from "./modal";
import './modal.css'

export default function ModalExample() {

    const [isModalOpened, setModalOpened] = useState(false);

    function handleModalPopup(){
        setModalOpened(!isModalOpened)
    }

    function handleOnClose(){
        console.log("closed");
        setModalOpened(!isModalOpened)
    }

  return (
    <div className="modal-div">
      <button className="modal-button" onClick={handleModalPopup}>Open Modal</button>
      {
        isModalOpened ? <Modal id={12} header={"Yos Header"}  footer={"Yos Footer"} onClose={handleOnClose}/> : ""  
        // body={"Click here to continue"}
      }
    </div>
  );
}
