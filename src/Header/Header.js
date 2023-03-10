import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css'
import './Header.css';

import { Home } from '../mycontents/Home';
import { About } from '../mycontents/About';
import { Contacts } from '../mycontents/Contacts';
import { Projects } from '../mycontents/Projects';
import { Achieve } from '../mycontents/Achieve';
import {HashRouter,Routes,Route,Navigate} from 'react-router-dom'

export const Header = () => {
    return (
        <>
          <Navbar className='Head call'>
            <Container>
              <Navbar.Brand href="#home" className='myclass'>KD</Navbar.Brand>
              <Nav className="me-auto" >
                <Nav.Link  className='text-black navkd1' href="#/home">Home</Nav.Link>
                <Nav.Link  className='text-black navkd' href="#/about">About</Nav.Link>
        
                <Nav.Link   className='text-black navkd' href="#/projects">Projects</Nav.Link>
                <Nav.Link  className='text-black navkd' href="#/achieve">Qualifications</Nav.Link>
                <Nav.Link  className='text-black navkd' href="#/contacts">Contacts</Nav.Link>
              </Nav>
            
            </Container>
            </Navbar>
            

            <HashRouter>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/achieve" element={<Achieve/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Navigate to="/home"/>}/>
                    
                </Routes>
            </HashRouter>
    
         
        </>
      );
}
