import "./App.css";
import "./App.css";
import Background from "./components/background/Background";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Background>
      <header className="max-w-6xl w-full space-y-56">
        <Navbar />
        <div className="flex md:flex-row">
          <div className="text-white">
            <p>
              Este es el texto que determina el tamaño de la sección. El texto
              puede ser tan largo como sea necesario y la imagen se ajustará al
              tamaño de esta sección de texto.
            </p>
          </div>
          <div className=" bg-white m-0 p-0">
            <img
              src="computer.gif"
              alt="Computer dance gif"
              className="w-max h-auto object-cover"
            />
          </div>
        </div>
        <p>HOLAAAAAAAAAAAAAAA</p>
      </header>
    </Background>
  );
}

export default App;
