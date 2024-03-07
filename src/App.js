import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home.js";
import Attractions from "./views/Attractions.js";
import Blog from "./views/Blog.js";
import ContactForm from "./views/ContactForm.js";
import Footer from "./components/Footer.js";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Attractions" element={<Attractions />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/ContactForm" element={<ContactForm />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
