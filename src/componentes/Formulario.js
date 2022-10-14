import { useState } from "react";
import { calcularTotal } from "../helpers";

//Definir el state

const Formulario = (props) => {
  const {cantidad,guardarCantidad,plazo,guardarPlazo,total,guardarTotal} = props;
    
    const leerCantidad = (e) => {
        guardarCantidad(parseInt(e.target.value))
    }
    const guardarPlazos = (e) => {
        guardarPlazo(parseInt(e.target.value))
    }

    //Definir state
    const [error,guardarError] = useState(false);
    const calcularPrestamo = e => {
        e.preventDefault();
        // Validar 
        if(cantidad === 0 || plazo === '' || isNaN(plazo) ){
           guardarError(true);
           return;
        }
        //Eliminar el error previo.
        guardarError(false);

        // Realizar la cotización
        
       const total =  calcularTotal(cantidad,plazo)
       guardarTotal(total);
       console.log(total);
    }

    return ( 
        <>
        <form onSubmit={calcularPrestamo}>
            <h2>Cantidad : {cantidad}</h2>
            
            <h2>Plazo : {plazo}</h2>
          <div className="row">
              <div>
                  <label>Cantidad Prestamo</label>
                  <input 
                      className="u-full-width" 
                      type="number" 
                      placeholder="Ejemplo: 3000" 
                      onChange={leerCantidad}
                  />
              </div>
              <div>
                  <label>Plazo para Pagar</label>
                  <select 
                      className="u-full-width"
                      onChange ={guardarPlazos}
                  >
                      <option value="">Seleccionar</option>
                      <option value="3">3 meses</option>
                      <option value="6">6 meses</option>
                      <option value="12">12 meses</option>
                      <option value="24">24 meses</option>
                  </select>
              </div>
              <div>
                  <input 
                      type="submit" 
                      value="Calcular" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
  {(error) ? <p className="error">Todos los campos son obligatorios</p> : ''}
  </>
     );
}
 
export default Formulario;