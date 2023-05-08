import Intro from "./components/Intro.js";
import AboutPage from "./components/About.js";
import Experience from "./components/Experience.js";
import SideBar from "./components/SideBar.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <SideBar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
