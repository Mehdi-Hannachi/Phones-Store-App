import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
// import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
// import PhoneDetails from "./components/PhoneDetails/PhoneDetails";

function App() {
  // const loading = useSelector((state) => state.phoneReducer.loading);

  const [textSearch, setTextSearch] = useState("");

  return (
    <div className="App">
      <Header setTextSearch={setTextSearch} />
      {/* <Header addNewPhone={addNewPhone} setTextSearch={setTextSearch} /> */}

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/main"
          render={(rest) => <Main textSearch={textSearch} {...rest} />}
        />

        <Route
          exact
          path="/phones/phonedetails/:myid"
          render={(defaultProps) => <PhoneDetails {...defaultProps} />}
        />
        <Route
          exact
          path="/login"
          render={(defaultProps) => <Login {...defaultProps} />}
        />
        <Route
          exact
          path="/register"
          render={(defaultProps) => <Register {...defaultProps} />}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
