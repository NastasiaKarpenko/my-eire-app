 import { Link } from "react-router-dom";
 import '../css/styles.css' 


function Navbar() {
    return (
      <div>
         <nav className = "navbar">
            <Link to="/">Home</Link>  
            <Link to="/Attractions">What to see</Link>   
            <Link to="/Blog"> Get to know Ireland</Link>  
            <Link to="/ContactForm">Book your Adventure</Link>
        </nav>
      </div>
    );
  }
  
  export default Navbar;