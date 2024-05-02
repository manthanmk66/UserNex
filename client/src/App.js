import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/herosection";
import Signup from "./pages/signup";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import OTP from "./pages/Otp";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otppage" element={<OTP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
