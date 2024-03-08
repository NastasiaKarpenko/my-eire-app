import { Link } from "react-router-dom";

function Footer() {

    return (
      <div className = "footer roboto-serif-ireland ">
        <span> Welcome to Ireland! </span>
        <span>Bus excursion. Personal guide. </span>
        <span>Customized trip plan.</span>
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
