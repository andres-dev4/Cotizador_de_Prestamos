const Resultado = ({total,plazo,cantidad}) => {
    let pagomensual = total / plazo;
    return( <>
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>La cantidad solicitada es: ${cantidad}</p>
            <p>A pagar en: {plazo} meses</p>
            <p>Su pago mensual es de: {pagomensual.toFixed(2)}</p>
            <p>total a pagar : ${total}</p>
        </div>
    </>);

}

export default Resultado;