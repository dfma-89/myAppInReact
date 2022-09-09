//Arriba del componente van los IMPORTS
//En el medio delcaramos el componnete funcional con lo que debe renderizar y la lógica que tenga
//Abajo del componente, van los EXPORTS
import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar";
import {  Routes, Route } from "react-router-dom";

const App = () => {
  //Logica del componente
  //console.log ("App");
  //Renderizar el componente
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={<ItemListContainer nameEcommerce="Tuki Store" />}
        />
        <Route
          path="/category/:category/:id"
          element={<ItemListContainer nameEcommerce="Tuki Store" />}
        />
        <Route
          path="/about"
          element={<h1>Work in progress: About</h1>}
        />
        <Route
          path="*"
          element={<ItemListContainer nameEcommerce="Tuki Store" />}
        />
        <Route
          path="/item/:id"
          element={<h1>Work in progress: Item</h1>}
        />
      </Routes>
       {/* Tags de Autocierre */}
    </div>
  );
};

export default App;

// export default - Exporta el componente App para usarlo en otro archivo. 
//En ese otro  archivo, se puede importar con el nombre App o le puedo poner un alias (Ponerle otro nombre).

// export - Exporta el componente para usarlo en otro archivo y debo invocarlo con el mismo nombre que en el export 
//y llamarlo entre llaves.