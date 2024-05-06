import "./App.css";
import "./App.css";
import BannerText from "./components/banner/BannerText";
import About from "./sections/about/About";
import Background from "./sections/background/Background";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <Background>
      <Header />
      <BannerText />
      <Projects />
      <About />
    </Background>
  );
}

export default App;
