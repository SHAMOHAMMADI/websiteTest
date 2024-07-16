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
        <li>
          <Link to="/">home</Link>
        </li>
        
          <li><Link to="product">product </Link></li>
       
          <li><Link to="gallery">gallery</Link></li>
         
        
       
          <li> <Link to="contactus">contactus</Link></li>
        
        
          <li><Link to="aboutus">aboutus</Link></li>
          {/* <li><Link to="SubProducts">subproducts</Link></li> */}
      </ul>
    </div>
  );
}

export default Navbar;
