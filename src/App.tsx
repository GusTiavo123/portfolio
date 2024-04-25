import "./App.css";
import "./App.css";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Background>
      <header className="max-w-6xl w-full space-y-56">
        <Navbar />
        <img src="computer.gif" alt="Descripción del GIF" className="cursor-pointer"/>
      </header>
    </Background>
  );
}

export default App;
