import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as styles from './css/styles.css'; 
import Navbar from "./components/Navbar";
import Home from "./views/Home.js";
import Attractions from "./views/Attractions.js";
import Blog from "./views/Blog.js";
import ContactForm from "./views/ContactForm.js";
import Footer from "./components/Footer.js";



function App() {
  return (
    <div>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Playfair+Display:wght@700&family=Poppins&display=swap')
      </style>
      <style> 
        @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Playfair+Display:wght@700&family=Poppins&family=Roboto+Serif:opsz,wdth,GRAD@8..144,100.5,70&display=swap')
      </style>
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
