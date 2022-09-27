import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';


const MyAPI = ({buscar}) => {
  
    const [busqueda, setBusqueda] = useState([]);
    const [info, setInfo] = useState([]);
    

     useEffect(() => {
      consultarInformacion();
      }, []);
  
     //  Función que consulta la API
     const consultarInformacion = async () => {
     const url = 'https://gateway.marvel.com:443/v1/public/characters?limit=99&apikey=e48ccae9e6de897734d0274d1fdb5e7f';
     const response = await fetch(url)
     const data = await response.json()
     setInfo(data.data.results); // con setInfoactualizamos el estado
     

    }
      // cierre consulta api

    let resultado = [];

    if(buscar === ""){    
        resultado = info;
        
    }else{
        resultado = !busqueda ? info : info.filter((dato)=> dato.name.toLowerCase().includes(buscar.toLocaleLowerCase()))   
        resultado.sort((a, b) => { return a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1;  })
        console.log(resultado)  
    }
        
     return (
     <div className='page'>
         <div className="container"> 
          <div className="row p-3 justify-content-center">

       
             <div className='cards'>      
                    {resultado.map((datos) => (
                              <Card key={datos.id}  style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={datos.thumbnail.path + "." + datos.thumbnail.extension} />
                              <Card.Body>
                                <Card.Title>{datos.name}</Card.Title>
                                {/* <Card.Text>
                                {datos.description}.
                                </Card.Text>  */}
                              </Card.Body>
                              </Card>
                      ))}
            </div> 
          </div> 
      </div> 
     </div>
     );
};

export default MyAPI;
