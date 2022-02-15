import React from 'react';
import { Form,Button } from 'react-bootstrap';
import './ContactPage.css'
import Navbar from '../navbar/Navbar.js';



const Contactpage = () => {
  return <div className="contact-page">
        <Navbar/>
          <div className='formContact'>
            <div className='contact'>
            <h3>N'hésitez pas de nous Contacter</h3>
          <Form>
          <Form.Group className="mb-3 grpinput">
    <Form.Label className='labelContact' >Nom et Prénom</Form.Label>
    <Form.Control placeholder="Entrez votre Nom et prénom..." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className='labelContact'>Adresse Email</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group className="mb-3 grpinput">
    <Form.Label className='labelContact' >Sujet</Form.Label>
    <Form.Control placeholder="Entrez le Sujet..." />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label className='labelContact'>Message</Form.Label>
    <Form.Control as="textarea" rows={5} />
  </Form.Group>
  <Button variant="dark">Envoyer</Button>
</Form>
            </div>
  


          </div>
      
      
  </div>;
};

export default Contactpage;
