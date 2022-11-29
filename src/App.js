import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom"
import Contacto from "./components/Contacto";
import Inicio from "./components/Inicio";
import Nosotros from "./components/Nosotros";

function App() {
  return (
    <Router>
    <div className="App">
      <h1>Navbar</h1>
      <hr></hr>
      <Routes>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/" element={<Inicio />}/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
