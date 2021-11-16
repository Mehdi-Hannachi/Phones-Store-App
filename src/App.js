import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import { data } from "./data";

function App() {
  const [phones, setPhones] = useState(data);
  const [textSearch, setTextSearch] = useState("");

  const addNewPhone = (newPhone) => {
    setPhones([...phones, newPhone]);
  };

  return (
    <div className="App">
      <Header addNewPhone={addNewPhone} setTextSearch={setTextSearch} />
      <Main phones={phones} textSearch={textSearch} />
      <Footer />
    </div>
  );
}

export default App;
