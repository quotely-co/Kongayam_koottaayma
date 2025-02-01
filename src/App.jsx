import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Charity from "./pages/Charity.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/charity" element={<Charity />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
