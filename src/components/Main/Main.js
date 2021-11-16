import Products from "../Products/Products";

export const Main = (props) => {
  // export const Main = ({phones}) => {
  return (
    <div>
      {/* <Products phones={phones} /> */}
      <Products phones={props.phones} textSearch={props.textSearch} />
    </div>
  );
};
