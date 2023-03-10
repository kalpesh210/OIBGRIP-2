import React from 'react'
import kd from '../images/kd.jpg'

import front from '../images/front.jpg'
import last from '../images/last.jpg'
import app from '../images/app.jpg'

import java from '../images/java.jpg'
import python from '../images/python.jpg'
import js from '../images/js.png'
import react from '../images/react.jpg'

import './About.css'
export const About = () => {
  return (
    <div className="bg">
    <section  className="section mt-3">
    <div className="container mt-5">
        <div className="row text-center text-md-left">
            <div className="col-md-3">
                <img src={kd} alt="" className="img-thumbnail mb-4"/>
            </div>
            <div className="pl-md-4 col-md-9">
                <h6 className="title kkl">Kalpesh Dhangar</h6>
                <p className="subtitle kkl">Web Developer</p>
                <p className=" kkl">Hi, I'm Kalpesh and I'm a programmer and developer. I have a Bachelor's degree in Computer Science. I specialize in web development and have worked with a variety of languages such as HTML, CSS, JavaScript, PHP and SQL. I have worked as intern (Java Developer) for duration of three months in r3sys. Successfully made the dynamic web projects using java as well as MERN stack.I have a strong knowledge of object-oriented programming principles and I'm familiar with frameworks such as React. Believing in mantra of "Development is all which human needs to survive"</p>

                <button className="bt1"><a className="sd"  href="https://drive.google.com/file/d/1o5ZQDn19Ag0-EaDvQy7ex4gHl-KylMH1/view?usp=sharing">DOWNLOAD CV</a></button>                   
            </div>
        </div>
    </div>
</section>


<section className="section">
 <div className="container text-center">
     <h6 className="subtitle sub" >Skills</h6>
     <h6 className="section-title mb-4 sec" >Why Choose me</h6>
     <p className="mb-5 pb-4"> I'm a fast learner and I'm always eager to learn new technologies. I'm very passionate about programming. I'm looking forward to working with you and helping to build amazing applications. Always keen to learn and explore new technology. I always want to be around qualities like punctualness, honesty and consistency.</p>

     <div class="row">
             
              <div className="col-sm-6 col-md-3 mb-4 bnm">
                  <div className="custom-card card border">
                      <div className="card-body">
                      <img src={front} />
                        <div className="card-body">
                          <h5 className="card-title">Front-end Design</h5>
                      
                      </div>
                        
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                  <div className="custom-card card border">
                      <div className="card-body">
                      <img src={app} />
                        <div className="card-body">
                          <h5 className="card-title">App Developement</h5>
                        

                      </div>

                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                  <div className="custom-card card border">
                      <div className="card-body" >
                      <img src={last} />
                        <div className="card-body">
                          <h5 className="card-title" >Web design</h5>
                        
                      </div>
                      </div>
                  </div>
              </div>
     </div>  
 </div>
</section>


<section className="section">
 <div className="container text-center">

     <h6 className="section-title mb-4 sec" >Programming Skills</h6>
    
     <div class="row">
              <div className="col-sm-6 col-md-3 mb-4">
                  <div className="custom-card card border">
                      <div className="card-body">
                        <img src={java} />
                        <div className="card-body">
                          <h5 className="card-title">Java</h5>
                        
                      </div>
                         
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                  <div className="custom-card card border">
                      <div className="card-body">
                      <img src={python} />
                        <div className="card-body">
                          <h5 className="card-title">Python</h5>
                      
                      </div>
                        
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                  <div className="custom-card card border">
                      <div className="card-body">
                      <img src={js} />
                        <div className="card-body">
                          <h5 className="card-title">Javascript</h5>
                        

                      </div>

                      </div>
                  </div>
              </div>
              <div className="col-sm-6 col-md-3 mb-4">
                  <div className="custom-card card border">
                      <div className="card-body" >
                      <img src={react} />
                        <div className="card-body">
                          <h5 className="card-title" >React</h5>
                        
                      </div>
                      </div>
                  </div>
              </div>
     </div>  
 </div>
</section>
</div>



  )
}
