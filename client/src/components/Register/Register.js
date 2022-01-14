import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { userRegister } from "../../JS/actions/userActions";
import "../Login/login.css";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const errors = useSelector((state) => state.userReducer.errors);

  const dispatch = useDispatch();
  const history = useHistory();

  const register = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      adress,
      phoneNumber,
      email,
      password,
    };

    dispatch(userRegister(newUser));

    setAdress("");
    setEmail("");
    setPhoneNumber("");
    setLastName("");
    setFirstName("");
    setPassword("");

  };

  return (
    <form className="my-form">
      <h3>Register</h3>

      <div className="form-group">
        <label>First name</label>
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Last name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone Number</label>
        <input
          type="text"
          className="form-control"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Adress</label>
        <input
          type="text"
          className="form-control"
          placeholder="Adress"
          value={adress}
          onChange={(e) => setAdress(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        onClick={(e) => register(e)}
        className="btn btn-dark btn-lg btn-block"
      >
        Register
      </button>
      <p className="forgot-password text-right">
        Already registered <Link to="/login">log in?</Link>
      </p>
    </form>
  );
};

export default Register;
