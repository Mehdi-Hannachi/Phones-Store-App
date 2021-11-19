// import React, { useState, useEffect } from "react";

// const PhoneDetails = ({
//   match: {
//     params: { myid },
//   },
//   phones,
// }) => {
//   const [phone, setPhone] = useState({});

//   useEffect(() => {
//     findPhone();
//   }, []);

//   const findPhone = () => {
//     setPhone(phones.find((el) => el.id === myid));
//   };

//   return (
//     <div>
//       phone Description
//       <h1>{phone.marque}</h1>
//     </div>
//   );
// };

// export default PhoneDetails;

import React, { useState, useEffect } from "react";

import Modal from "react-modal";
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

const PhoneDetails = ({ id, phones }) => {
  const [phone, setPhone] = useState({});

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    findPhone();
  }, []);

  const findPhone = () => {
    setPhone(phones.find((el) => el.id === id));
  };

  return (
    <div>
      <span onClick={openModal}>More details</span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <span>Hello</span>
        </div>
      </Modal>
    </div>
  );
};

export default PhoneDetails;
