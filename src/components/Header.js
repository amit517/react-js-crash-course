import PropTypes from "prop-types";
import { Button } from "./Button";
export const Header = ({ title }) => {
  const onClick = (e) => {
    console.log(e);
    console.log("onClick");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

//css in js
// const headingStyle = { color: "red", backgroundColor: "black" };

Header.defaultProps = {
  title: "Task Tracker",
};

Header.prototype = {
  title: PropTypes.string.isRequired,
};
