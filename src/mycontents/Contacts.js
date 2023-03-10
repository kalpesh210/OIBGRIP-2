import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Contact.css';


export const Contacts = () => {
  return (
    <>
    <section className="section">
 <div className="container text-center">
     <h6 className="subtitle sub" >Contact</h6>
     <h6 className="section-title mb-4 sec" >Get In Touch With Me</h6>


            <div className="contact text-left">
                <div className="form">
                    <h6 className="subtitle m3">Available 24/7</h6>
                    <h6 className="section-title mb-4 m4">Get In Touch</h6>
                    <form>
                        <div className="form-group">
                        <InputGroup className="form-control text m2">
                        <Form.Control
                          type="email"
                          id="exampleInputEmail1" 
                          aria-describedby="emailHelp" 
                          placeholder="Enter email" 
                         required
                          />      
                         </InputGroup>
                           
                        </div>
                        <div class="form-group">
                        <InputGroup className="form-control text1 m2">
                        <Form.Control
                          type="password" 
                         
                          id="exampleInputPassword1" 
                          placeholder="Password" 
                          required
                          />      
                        </InputGroup>
                        </div>
                        <div className="form-group">
                            <textarea className="contact-message text2 m1" 
                             cols="30" 
                             rows="5" 
                             placeholder="Message"
                             ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-block rounded w-lg sub bt" >Send Message</button>
                    </form>
                </div>
                <div>
                <div className="contact-infos alpha">
                    <div className="item">
                        <i className="ti-location-pin"></i>
                        <div className="">
                            <h5>Location</h5>
                            <p>14 A Kiran Society Shirpur Dist.Dhule</p>
                        </div>                          
                    </div>
                    <div className="item">
                        <i className="ti-mobile"></i>
                        <div>
                            <h5>Phone Number</h5>
                            <p>8857 8630 91</p>
                        </div>                          
                    </div>
                    <div className="item">
                        <i className="ti-email"></i>
                        <div className="mb-0 ">
                            <h5>Email Address</h5>
                            <p>kalpeshdhangar210@gmail.com</p>
                        </div>
                    </div>
                </div>                  
            </div>
        </div>  
        </div>
    </section>


</>


  )
}
