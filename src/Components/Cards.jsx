import React, { useState } from "react";
import Card from 'react-bootstrap/Card';


const Cards = ({resultado}) => {
    console.log("asdas")
    console.log(resultado)
    return (
      <div>
           <div className='cards'>      
                    {resultado.map((datos) => (
                              <Card key={datos.id}  style={{ width: '18rem' }}>
                              <Card.Img variant="top" src={datos.thumbnail.path + "." + datos.thumbnail.extension} />
                              <Card.Body>
                                <Card.Title>{datos.name}</Card.Title>
                                {/* <Card.Text>
                                {datos.description}.
                                </Card.Text> */}
                              </Card.Body>
                              </Card>
                            
                      ))}
            </div> 
      </div>
    );

};

export default Cards;
