import Intro from "./components/Intro.js";
import AboutPage from "./components/About.js";
import Projects from "./components/Projects.js";
import NavBar from "./components/NavBar.js";

const App = () => {
  return (
    <div className="full-container">
      <NavBar />
      <Intro />
      <AboutPage />
      <Projects />
    </div>
  );
};

export default App;
