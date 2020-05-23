import React from 'react';
import '../home_right/style.css';
//import Foad from '../../assets/img/foad35.png';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import SocialIcons from '../../social_icons';
//
function Home_Right() {
  return (
    <Container className="home-right">
      <Row className="home-right-main">
        <Col xl={12}>
          
          <Image src="https://drive.google.com/open?id=1TMjOfDUD2r8gUXCNvrSytSQL02vLk9fe" className="home-right-main-img" alt="Sanil's Image"/>
        </Col>
        <Row className="home-right-footer" >
          <SocialIcons />
        </Row>
      </Row>
    </Container>
  );
}

export default Home_Right;
