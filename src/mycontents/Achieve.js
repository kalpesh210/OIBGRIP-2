import React from 'react'
import Card from 'react-bootstrap/Card';
import './Achieve.css';
export const Achieve = () => {
  return (
    <section id="bj">
        <Card className='kl'>
    <Card.Header as="h5">B.Tech in Computer Engineering</Card.Header>
    <Card.Body>
      <Card.Title>R. C. Patel Institute of Technology, Shirpur,
        Maharashtra,India</Card.Title>
      <Card.Text>
      CGPA : 8.57
     
      </Card.Text>
      
    </Card.Body>
  </Card>
  <Card className='kl'>
    <Card.Header as="h5">HSC</Card.Header>
    <Card.Body>
      <Card.Title>Pratap College, Amalner (Jalgaon)</Card.Title>
      <Card.Text>
     Percentage : 72.62%
     
      </Card.Text>
    
    </Card.Body>
  </Card>
  <Card className='kl1'>
    <Card.Header as="h5">SSC</Card.Header>
    <Card.Body>
      <Card.Title>R. C. Patel Secondary and Higher Secondary School, Tekwade (Dhule)</Card.Title>
      <Card.Text>
      Percentage : 87%
     
      </Card.Text>
   
    </Card.Body>
  </Card>

  </section>
  )
}
