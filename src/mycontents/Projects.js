import React from 'react'
import Card from 'react-bootstrap/Card';
import './Projects.css';
export const Projects = () => {
  return (
    <section id="bj">
   
    <Card className='kl'>
    <Card.Header as="h5">E-Farming System</Card.Header>
    <Card.Body>
   
      <Card.Text>
      e-Agriculture is a global Community of Practice, where people from all over the world exchange information, ideas, and resources related to the use of information and communication technologies (ICT) for sustainable agriculture and rural development.
     
      </Card.Text>
      
    </Card.Body>
  </Card>
  <Card className='kl'>
    <Card.Header as="h5">Inventory Management System</Card.Header>
    <Card.Body>
      
      <Card.Text>
     Inventory management helps us to ensure there are enough goods
or materials to meet demand without creating overstock, or excess
inventory.
     
      </Card.Text>
    
    </Card.Body>
  </Card>
  <Card className='kl1'>
    <Card.Header as="h5">Black Spot Detection</Card.Header>
    <Card.Body>
      
      <Card.Text>
      Development of blackspot detection tool to detect danger areas
for riders and drivers
      </Card.Text>
   
    </Card.Body>
  </Card>
  
  </section>
  )
}
