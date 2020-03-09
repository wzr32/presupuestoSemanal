import React, { useState } from 'react';
import Error from './Error';

const Formulario = () => {

    const [nombreGasto, setNombreGasto] = useState('');
    const [cantidadGasto, setCantidadGasto] = useState(0);
    const [error, setError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if (cantidadGasto < 1 || isNaN( cantidadGasto ) || nombreGasto.trim() === '') {
            setError(true)
            return;
        }
        
        setError(false);

    }

    return (
        <form
            onSubmit={agregarGasto}
        >
            <h2>Agrega tus gastos aqui</h2>

            {error ? <Error mensaje="Ambos campos son obligatorios o Presupuesto incorrecto"/> : null}

            <div className="campo">
                <label>Nombre Gasto</label>

                <input type="text" className="u-full-width" placeholder="Ej. Comida" onChange={e => setNombreGasto(e.target.value)}
                value={nombreGasto}/>
            </div>

            <div className="campo">
                <label>Cantidad Gasto</label>

                <input type="number" className="u-full-width" placeholder="Ej. 300" onChange={e => setCantidadGasto(parseInt(e.target.value, 10))} value={cantidadGasto}/>
            </div>

            <input type="submit" className="button-primary u-full-width" value="Agregar"/>
        </form>
    );
};

export default Formulario;