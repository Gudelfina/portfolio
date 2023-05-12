import Intro from "./components/Intro.js";
import AboutPage from "./components/About.js";
import Projects from "./components/Projects.js";
import NavBar from "./components/NavBar.js";
import Experience from "./components/Experience.js";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Intro />
      <AboutPage />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default App;
