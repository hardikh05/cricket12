import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
  import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import Footer from "./components/Footer";
import Tournaments from "./components/tournaments";
import TeamFormPage1 from "./components/TeamFormPage1";
import TeamFormPage2 from "./components/TeamFormPage2";
import Success from "./components/Success";

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Tournaments />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/register" element={<TeamFormPage1 />} />
            <Route path="/register/page2" element={<TeamFormPage2 />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </div>
        <Footer/>
      </Router>
  </>
  );
}

export default App;
