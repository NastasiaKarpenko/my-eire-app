import { Link } from "react-router-dom";

function Navbar() {
  const path = window.location.pathname;
  console.log(path);
  return (
    <div>
      <nav className="navbar roboto-serif-ireland">
        <Link to="/">Home</Link>
        <Link to="/Attractions">What to see</Link>
        <Link to="/Blog"> Get to know Ireland</Link>
        <Link to="/ContactForm">Book your Adventure</Link>
      </nav>
    </div>
  );
}

export default Navbar;
