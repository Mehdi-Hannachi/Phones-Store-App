import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Products from "../Products/Products";

export const Main = ({ textSearch }) => {
  // const isAuth = useSelector((state) => state.phoneReducer.isAuth);

  return (
    <div>
      <Products textSearch={textSearch} />
    </div>
  );
};
