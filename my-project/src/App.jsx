import { Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import RunningBar from "./components/navbar/Runningbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <RunningBar />
        <div className="pt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;