import React, { Component } from 'react';
import './style.css';
import {Container, Row} from 'react-bootstrap';
import Footer from '../Footer';
import Animate from 'react-smooth';
import ReactGa from 'react-ga';
import {Helmet} from 'react-helmet';
import {Jumbotron} from 'react-bootstrap';
//import HamburgerMenu from '../../components/hamburger_menu';
import particles from '../../constants/particle_about';
import Particles from 'react-particles-js';

class About extends Component {

  componentDidMount() {
    ReactGa.initialize("UA-154721739-1");
    ReactGa.pageview('About Screen');
  }
 
  render() {
    return (
        <Container className="About-header" fluid={true}>
          <Helmet>
                <meta charSet="utf-8" />
                <title>About | Sanil Upadhyay</title>
          </Helmet>
           <Animate to="1" from="0" attributeName="opacity">
           <Particles
            params={particles}
            className="particle"
          />
           <Row className="About-main">
              
              <div className="d1">

              <Jumbotron style={{background:'none'}}>
  <Container >
    <h1>About Me</h1>
    <hr style={{border: '0',clear:'both',display:'block' ,backgroundColor:'white',height: '2px'}} />
    <br />
    <p>
    I am a dedicated , self-starter, team player and multi-tasker pursuing M.Tech(CSE) from Indian Institute of Technology Guwahati, B.Tech(CSE) from Vivekananda Institute of Technology. Currently working as a teaching assistant at IITG. I'm currently working  in the field of Computer Vision for M.Tech thesis..

    
    </p>
    <h2 id="education">EDUCATION</h2>
    <hr style={{border: '0',clear:'both',display:'block' ,backgroundColor:'white',height: '2px'}} />
    <br />
<table style={{border: '1px solid',clear:'both',padding:"10px"}} >
<thead style={{border: '1px solid',clear:'both'}}>
<tr>
<th style={{border: '1px solid',clear:'both'}}><strong>Degree / Certificate</strong></th>
<th style={{border: '1px solid',clear:'both'}}><strong>Institute / Board</strong></th>
<th style={{border: '1px solid',clear:'both'}}><strong>CGPA/Percentage</strong></th>
<th style={{border: '1px solid',clear:'both'}}><strong>Year</strong></th>
</tr>
</thead>
<tbody style={{border: '1px solid',clear:'both'}}>
<tr style={{border: '1px solid',clear:'both'}}>
<td style={{border: '1px solid',clear:'both'}}>M.Tech</td>
<td style={{border: '1px solid',clear:'both'}}>Indian Institute of Technology,Guwahati</td>
<td style={{border: '1px solid',clear:'both'}}>8.78(Current)</td>
<td style={{border: '1px solid',clear:'both'}}>2019-Present</td>
</tr>
<tr style={{border: '1px solid',clear:'both'}}>
<td style={{border: '1px solid',clear:'both'}}>B.Tech</td>
<td style={{border: '1px solid',clear:'both'}}>Rajasthan Technical University,Kota</td>
<td style={{border: '1px solid',clear:'both'}}>85.40%</td>
<td style={{border: '1px solid',clear:'both'}}>2015-2019</td>
</tr>
<tr style={{border: '1px solid',clear:'both'}}>
<td style={{border: '1px solid',clear:'both'}}>Senior Secondary</td>
<td style={{border: '1px solid',clear:'both'}}>CBSE board</td>
<td style={{border: '1px solid',clear:'both'}}>86.6%</td>
<td style={{border: '1px solid',clear:'both'}}>2014</td>
</tr>
<tr style={{border: '1px solid',clear:'both'}}>
<td style={{border: '1px solid',clear:'both'}}>Secondary</td>
<td style={{border: '1px solid',clear:'both'}}>CBSE board</td>
<td style={{border: '1px solid',clear:'both'}}>9.0</td>
<td style={{border: '1px solid',clear:'both'}}>2012</td>
</tr>
</tbody>
</table>
<br />
<h1 id="technical-skills">Technical skills</h1>
<hr style={{border: '0',clear:'both',display:'block' ,backgroundColor:'white',height: '2px'}} />
<br />
<p><strong>Programming languages</strong> : C, C++, Python</p>
<p><strong>Web technologies</strong> : HTML, CSS <em>, Javascript </em> , ReactJs*</p>
<p><strong>Operating system</strong> : Windows, Linux
<strong>Application Development</strong> : Android*</p>
<p>* Elementary proficiency</p>
<br />
<h1>Contact Details</h1>
<hr style={{border: '0',clear:'both',display:'block' ,backgroundColor:'white',height: '2px'}} />
<br />
<p><strong>Call Me </strong> : +91-7017148200</p>
<p><strong>E-mail</strong> : s.upadhyay@iitg.ac.in</p>
  </Container>
</Jumbotron>
              

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

export default About;