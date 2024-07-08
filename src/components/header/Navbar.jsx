import styled from "./navbar.module.css"

function Navbar(props){

   let test = "Logo"
   console.log(props.title)
  const{title} = props
    return(

        <div className={styled.header}>
            <h3>{title}</h3>
            <ul>
                <li>home</li>
                <li>product</li>
                <li>gallery</li>
                <li>contactus</li>
                <li>aboutus</li>
            </ul>
        </div>
    )
}

export default Navbar