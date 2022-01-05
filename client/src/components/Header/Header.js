import "./header.css";
import GuestNav from "../NavBars/GuestNav";
import LoggedNav from "../NavBars/LoggedNav";

// function Header({ addNewPhone, setTextSearch }) {
function Header({ setTextSearch }) {
  const isAuth = true;

  return isAuth ? <LoggedNav setTextSearch={setTextSearch} /> : <GuestNav />;
}

export default Header;
