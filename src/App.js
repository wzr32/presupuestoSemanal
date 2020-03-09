import React, { useState } from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';

const App = () => {

  const [presupuesto, setPresupuesto] = useState();
  const [restante, setRestante] = useState();
  const [mostarPregunta, setMostrarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
        {mostarPregunta ? 
        (<Pregunta 
            setPresupuesto={setPresupuesto}
            setRestante={setRestante}
            setMostrarPregunta={setMostrarPregunta}
          /> ) : 
          (<div className="row">
            <div className="one-half column">
              <Formulario />
            </div>
            <div className="one-half column">
              2
            </div>
          </div>
            )}
        </div>
      </header>

    </div>
  );
}

export default App;
