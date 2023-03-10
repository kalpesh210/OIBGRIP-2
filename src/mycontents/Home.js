import React from 'react'
import './Home.css';
import soft from '../images/port1.svg'

export const Home = () => {
  return (
    <div className='jk'>
            <div className="myt">
              <h1 className='ikd'>
               Hello, I'm
              </h1> 
              <h2 className='ike'><strong>Kalpesh Dhangar</strong></h2>
              <span className="mute">Web developer</span>
              <div >  <form action='#/Contacts' method='get'><button href="contact.html" className="but1" >Hire me</button>
                <button type="submit" href="contact.html" className="but" ><a className="sd"  href="https://drive.google.com/file/d/1o5ZQDn19Ag0-EaDvQy7ex4gHl-KylMH1/view?usp=sharing">Download CV</a></button>
                </form>
        
                <div className="row">
                  <div className="col-6" ><img 
                      className="d-block w-101"
                      src={soft}
                      alt="First slide"
                       />
                       </div>
              
              </div>
            </div>
          </div>
          </div>
        
  )
}
