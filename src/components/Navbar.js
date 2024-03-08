import { NavLink } from "react-router-dom";

function Navbar() {
  const path = window.location.pathname;
  
  return (
    <div>
      <nav className="navbar roboto-serif-ireland">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/Attractions">What to see</NavLink>
        <NavLink to="/Blog"> Get to know Ireland</NavLink>
        <NavLink to="/ContactForm">Book your Adventure</NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
