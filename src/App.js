import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
// import { data } from "./data";
import Home from "./components/Home/Home";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails";
// import PhoneDetails from "./components/PhoneDetails/PhoneDetails";

function App() {
  // const [phones, setPhones] = useState(data);

  const phones = useSelector((state) => state.phoneReducer.phones);
  const [textSearch, setTextSearch] = useState("");

  // const addNewPhone = (newPhone) => {
  //   setPhones([...phones, newPhone]);
  // };

  return (
    <div className="App">
      <Header setTextSearch={setTextSearch} />
      {/* <Header addNewPhone={addNewPhone} setTextSearch={setTextSearch} /> */}

      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/main"
          render={() => <Main phones={phones} textSearch={textSearch} />}
        />

        <Route
          exact
          path="/phones/phonedetails/:myid"
          render={(defaultProps) => (
            <PhoneDetails {...defaultProps} phones={phones} />
          )}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
