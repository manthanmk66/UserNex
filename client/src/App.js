import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/herosection";
import Signup from "./pages/signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
