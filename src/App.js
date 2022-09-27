
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState, useEffect } from "react";
import MyAPI from './Components/MyAPI';
import Footer from './Components/Footer';
function App() {
    const [busqueda, setBusqueda] = useState("");
    // funcion optener el valor input de busqueda
    const buscar = (e) => { setBusqueda(e.target.value);}  ;
 
   return (
   <div className='page'>
          <nav className="navbar navbar-dark mb-4 p-3 bg-dark text-light">
                    <img className='imgLogo' src='https://img2.freepng.es/20210508/le/transparent-marvel-icon-cinema-and-tv-icon-609758b9c9a900.382426681620531385826.jpg'></img>
                    {/* <span className="navbard-brand"> Marvel </span> */}
                    <input onChange={buscar} type="text" placeholder="Buscar" />      
          </nav>
         <MyAPI buscar={busqueda}></MyAPI>
         <Footer></Footer>
         
   </div>
   );
}
export default App;