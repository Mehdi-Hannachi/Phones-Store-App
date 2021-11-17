import React, { useState, useEffect } from "react";

const PhoneDetails = ({
  match: {
    params: { myid },
  },
  phones,
}) => {
  const [phone, setPhone] = useState({});

  useEffect(() => {
    findPhone();
  }, []);

  const findPhone = () => {
    setPhone(phones.find((el) => el.id === myid));
  };

  return (
    <div>
      phone Description
      <h1>{phone.marque}</h1>
    </div>
  );
};

export default PhoneDetails;
