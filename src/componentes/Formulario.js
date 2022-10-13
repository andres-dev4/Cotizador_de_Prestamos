import { useState } from "react";

//Definir el state

const Formulario = ({cantidad,guardarCantidad}) => {

 // cantidad es lo que obtiene el valor 
 // Guardar cantidad es la funcion pa guardar o modificar el state
    
    const leerCantidad = (e) => {
        guardarCantidad(parseInt(e.target.value))
    }


    return ( 
        <form>
            {cantidad}
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
     );
}
 
export default Formulario;