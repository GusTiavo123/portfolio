import "./App.css";
import "./App.css";
import BannerText from "./components/banner/BannerText";
import Background from "./sections/background/Background";
import Header from "./sections/header/Header";

function App() {
  return (
    <Background>
      <Header />
      <BannerText />
    </Background>
  );
}

export default App;
