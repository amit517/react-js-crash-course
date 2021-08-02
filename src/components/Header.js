import PropTypes from "prop-types";
import { Button } from "./Button";
export const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Hello" />
      <Button color="blue" text="Hello 1" />
      <Button color="red" text="Hello 3" />
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
