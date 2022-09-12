import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar'
import TableData from './Components/TableData';
import Formulario from './Components/Formulario';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Formulario />} />
          <Route path="/TableData" element={<TableData />} />
          {/* <Route path="/" element={<Table />} />
          <Route path="/" element={<RickandMorti />} />
          <Route path="/*" element={<Navigate to="/" />} /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;

// export default - Exporta el componente App para usarlo en otro archivo. 
//En ese otro  archivo, se puede importar con el nombre App o le puedo poner un alias (Ponerle otro nombre).

// export - Exporta el componente para usarlo en otro archivo y debo invocarlo con el mismo nombre que en el export 
//y llamarlo entre llaves.