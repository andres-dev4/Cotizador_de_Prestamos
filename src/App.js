import Header from "./componentes/Header";
import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Mensaje from "./componentes/Mensaje";
import Resultado from "./componentes/Resultado";
import Spinner from "./componentes/Spinner";

function App() {
  const [cantidad,guardarCantidad] = useState(0);  
  const [plazo,guardarPlazo] = useState(0);
  const [total,guardarTotal] = useState(0);
  const [cargando,guardarCargando] = useState(false);
 


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
        total={total}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
        />
        <div className="mensajes">         
        {
  cargando ? <Spinner/>  : total === 0 ? <Mensaje/> : <Resultado total={total} plazo={plazo} cantidad = {cantidad}/>
          
        }  
       </div>
      </div>
    </div>
  );
}

export default App;
