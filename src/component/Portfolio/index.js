import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import "../Portfolio/style.css"
import Animate from 'react-smooth';
import HomeLeft from "./home_left"
import HomeRight from "./home_right"
import Particles from 'react-particles-js';
import particles from '../../constants/particle';
import ReactGa from 'react-ga';

import Footer from "../Footer"
function Analytics(){
  ReactGa.initialize("UA-154721739-1")
  ReactGa.pageview('Home Screen')
}

const Landing = () => {
  Analytics();
  return (
  <div>
         
          <Animate to="1" from="0" attributeName="opacity">
            <Particles
            params={particles}
            className="particle"
            />
          <Container className="App-header" fluid={true}>
            <Row className="App-main">
              <Col  xl={7}  className="App-left">
                <HomeLeft />
              </Col>
              <Col  xl={5} className="App-right">
                <HomeRight />
              </Col>
            </Row>
            <Row className="App-footer">
              <Footer />
            </Row>
        </Container>
        </Animate>
      </div>
);}
export default Landing;