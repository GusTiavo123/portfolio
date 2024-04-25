import "./App.css";
import "./App.css";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";
import { TypewriterEffectSmoothText } from "./components/typewritter/Typewritter";

function App() {
  return (
    <Background>
      <header className="max-w-6xl w-full space-y-36 z-10">
        <Navbar />
        <div className="flex md:flex-row">
          <div className="text-white flex-1">
            <TypewriterEffectSmoothText />
          </div>
          <div className="flex-1 flex items-center justify-center">
            <img
              src="computer.gif"
              alt="Computer dance gif"
              className="w-max h-auto "
            />
          </div>
        </div>
      </header>
    </Background>
  );
}

export default App;
