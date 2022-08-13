import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Members from "./pages/members";
// Stylessheets
import "./styles/css/custom/index.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/members" element={<Members />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
