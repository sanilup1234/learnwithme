import React from 'react';
import '../home_left/style.css';
import {
  Container,
  Row,
  Col,
  Button
 } from 'react-bootstrap';
import ReactTypingEffect from 'react-typing-effect';
import {
   Link
  } from "react-router-dom";

  function Home_Left() {
  return (
   <Container className="home-left" >
    <Row className="home-left-main">
       <Col xl={12} className="home-left-main-col">
         <h1 className="first-line">
           Hello! 
         </h1>
         <h2 className="second_line">
           I am <strong>SANIL UPADHYAY</strong>
         </h2>
         <h3>
         <ReactTypingEffect
           text="Pursuing Masters in Computer Science from IIT GUWAHATI " 
           className="typical"
           speed="100"
           eraseDelay="500000"
           />
         </h3>
          
           <br />
           <Button  variant="outline-light" size="lg" className="home-left-aboutmme"><Link to="/about" style={{ textDecoration: 'none', color: 'white' }} >About Me</Link></Button> &nbsp;
           <Button variant="outline-light" size="lg" className="home-left-aboutmme"><Link style={{ textDecoration: 'none', color: 'white' }} to="/contact">Contact Me</Link></Button>
         </Col>
     </Row>
   </Container>
  );
}

export default Home_Left;