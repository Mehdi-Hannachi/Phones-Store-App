import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import Modal from "react-modal";
import "./addphone.css";
import { addPhone } from "../JS/actions/phoneActions";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// const AddPhone = ({ addNewPhone }) => {
const AddPhone = () => {
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  const [photo, setPhoto] = useState("");
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [ram, setRam] = useState("");
  const [camera, setCamera] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitPhone = (e) => {
    e.preventDefault();
    const phone = {
      id: uuidv4(),
      marque,
      modele,
      ram,
      photo,
      camera,
    };

    if (
      marque === "" ||
      modele === "" ||
      ram === "" ||
      camera === "" ||
      photo === ""
    ) {
      return alert("Empty field");
    }

    // addNewPhone(phone);
    dispatch(addPhone(phone));

    closeModal();
    setMarque("");
    setModele("");
    setPhoto("");
    setRam("");
    setCamera("");
  };

  return (
    <div>
      <button onClick={openModal} className="button-add">
        Add New Phone
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>Add New Phone</div>

        <form>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputEmail4">Marque</label>
              <input
                type="text"
                class="form-control"
                id="inputEmail4"
                placeholder="Marque"
                onChange={(e) => setMarque(e.target.value)}
              />
            </div>
            <div class="form-group col-md-6">
              <label for="inputPassword4">Modele</label>
              <input
                type="text"
                class="form-control"
                id="inputPassword4"
                placeholder="Modele"
                onChange={(e) => setModele(e.target.value)}
              />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Ram</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="Ram"
              onChange={(e) => setRam(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Camera</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Camera"
              onChange={(e) => setCamera(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Photo</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Photo"
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>

          <div class="form-group">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" />
              <label class="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <button
            type="submit"
            class="btn btn-primary"
            onClick={(e) => submitPhone(e)}
          >
            ADD PHONE
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddPhone;
