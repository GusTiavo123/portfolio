import "./App.css";
import "./App.css";
import BannerText from "./components/banner/BannerText";
import Background from "./sections/background/Background";
import Header from "./sections/header/Header";
import Projects from "./sections/projects/Projects";

function App() {
  return (
    <Background>
      <Header />
      <Projects />
      <BannerText />
    </Background>
  );
}

export default App;
