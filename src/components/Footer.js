import { Link } from "react-router-dom";

function Footer() {

    return (
      <div className = "footer">
        <span> Welcome to Ireland </span>
         <nav>
            <Link to="/">Home</Link>
            <Link to="/Attractions">What to see</Link>
            <Link to="/Blog"> Get to know Ireland</Link>
            <Link to="/ContactForm">Book your Adventure</Link>
        </nav>
      </div>
    );
  }

  export default Footer;
