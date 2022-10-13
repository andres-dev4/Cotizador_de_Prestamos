import Header from "./componentes/Header";
import { useState } from "react";
import Formulario from "./componentes/Formulario";

function App() {
  const [cantidad,guardarCantidad] = useState(0);
  
  const [plazo,guardarPlazo] = useState(0);
  return (
    <div className="App">
      <Header
        titulo="Cotizador de prestamos"
      />
      <div className="container">
        <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        />
      </div>
    </div>
  );
}

export default App;
