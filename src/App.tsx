import BannerText from "./components/banner/BannerText";
import About from "./components/sections/About";
import Background from "./components/sections/Background";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Hero from "./components/sections/Hero";
import Navbar from "./components/sections/Navbar";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <Background>
      <Navbar />
      <main className="flex flex-col items-center justify-center">
        <Hero />
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
