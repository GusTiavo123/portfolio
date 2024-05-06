import "./App.css";
import "./App.css";
import BannerText from "./components/banner/BannerText";
import About from "./sections/About";
import Background from "./sections/Background";
import Header from "./sections/Header";
import Projects from "./sections/Projects";


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
