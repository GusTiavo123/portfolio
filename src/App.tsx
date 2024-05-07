import "./App.css";
import "./App.css";
import BannerText from "./components/banner/BannerText";
import About from "./sections/About";
import Background from "./sections/Background";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";

function App() {
  return (
    <Background>
      <Navbar />
      <main className="flex flex-col items-center">
        <Header />
        <BannerText />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </Background>
  );
}

export default App;
