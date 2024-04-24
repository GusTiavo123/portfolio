import "./App.css";
import "./App.css";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Background>
      <div className="max-w-screen-lg w-full space-y-56">
        <Navbar />
        <img src="computer.gif" alt="Descripción del GIF"/>
        <p className="text-white">HOLAAAAA</p>
        <p className="text-white">HOLAAAAA</p>
      </div>
    </Background>
  );
}

export default App;
