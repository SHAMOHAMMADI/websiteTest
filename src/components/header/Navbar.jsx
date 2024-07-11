import styled from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar(props) {
  let test = "Logo";
  console.log(props.title);
  const { title } = props;
  return (
    <div className={styled.header}>
      <h3>{title}</h3>
      <ul>
        <Link to="/">
          <li>home</li>
        </Link>
        <Link to="product">
          <li>product</li>{" "}
        </Link>
        <Link to="gallery">
          {" "}
          <li>gallery</li>
        </Link>
        <Link to="contactus">
          <li>contactus</li>
        </Link>
        <Link to="aboutus">
          <li>aboutus</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
