import Intro from "./components/Intro.js";
import AboutPage from "./components/About.js";
import Experience from "./components/Experience.js";
import NavBar from "./components/NavBar.js";

const App = () => {
  return (
    <div className="full-container">
      <NavBar />
      <Intro />
      <AboutPage />
      <Experience />
    </div>
  );
};

export default App;
