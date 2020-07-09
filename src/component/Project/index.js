import React, { Component } from 'react';
import './style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../Footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import {Card,Button} from 'react-bootstrap'
//import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../constants/particle_contact';
import Particles from 'react-particles-js';
import im1 from "./im1.jpeg"
import im2 from "./im2.jpg"
import im3 from "./im3.png"
class Contact extends Component {

  componentDidMount() {
    ReactGa.initialize("UA-154721739-1");
    ReactGa.pageview('projects Screen');
  }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>Projects </title>
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row className="About-main">
              
              <div className="d1">
              <Card bg = "warning" border="info" style={{ width: '24rem' , float:'left',margin:'10px' }}>
              <Card.Img variant="top" src={im1} alt="Card image"/>
    
    <Card.Body >
   
      
      <Card.Text>
       Speech Recognition
      </Card.Text>
      <Button variant="success" border="secondary" href="https://github.com/sanilup1234/Speech_Project">Github Repository</Button>
      
    </Card.Body>
   
  </Card>
  <Card bg = "danger" border="info" style={{ width: '24rem',margin:'10px',float:'left',marginRight:'20px'}}>
  <Card.Img variant="top" src={im2} alt="Card image"/>
    
    <Card.Body >
   
      
      <Card.Text>
       ML Visual Web App
      </Card.Text>
      <Button variant="info" border="secondary" style={{marginRight:"10px"}} href="https://github.com/sanilup1234/ml-visual">Github Repository</Button>
      <Button variant="info" border="secondary" href="http://ml-visual.herokuapp.com/">Try Online</Button>
    </Card.Body>
   
  </Card>
  <Card bg = "primary" border="info" style={{ width: '24rem',margin:'10px',marginLeft:"30px"}}>
  <Card.Img variant="top" src={im3} alt="Card image"/>
    
    <Card.Body >
   
      
      <Card.Text>
      Online Compiler
      </Card.Text>
      <Button variant="secondary" border="secondary" style={{marginRight:"10px"}} href="https://github.com/sanilup1234/compiler-client">Github Repository</Button>
     
      <Button variant="secondary" href="https://sanilup1234.github.io/compiler-client/">Try Online</Button>
      
    </Card.Body>
   
  </Card>
  {/* <Card className="bg-dark text-white">
  <Card.Img src={im1} alt="Card image" style={{height:'50%' , width:'50%'}}/>
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card> */}
              </div>
           </Row>
          <Row className="About-footer">
            <Footer />
          </Row>
           </Animate>
       </Container>
    );
  }
}

export default Contact;