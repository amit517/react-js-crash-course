import PropTypes from "prop-types";
import { Button } from "./Button";
export const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd? "red" : "green"} text={showAdd ? "Close" : "Add"} onClick={onAdd} />
    </header>
  );
};

//css in js
// const headingStyle = { color: "red", backgroundColor: "black" };

Header.defaultProps = {
  title: "Task Tracker",
};

/* Header.prototype = {
  title: PropTypes.string.isRequired,
}; */
