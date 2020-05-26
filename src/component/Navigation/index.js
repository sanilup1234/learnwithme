import React from 'react';
import { Link} from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

import {
 
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  UncontrolledCollapse
  
  
} from "reactstrap";


const Navigation = () => {
  

const Navigationn = () => (
  
  <Navbar className='bg-dark' dark
         expand="md">
     <button className="navbar-toggler" id="navbar-collapse-main">
              <span className="navbar-toggler-icon" />
            </button>
           <NavbarBrand href="/" >Learn With Me</NavbarBrand>
           <UncontrolledCollapse navbar toggler="#navbar-collapse-main">
          <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink  to={ROUTES.PORTFOLIO} tag ={Link} >
                   
                    PortFolio
                  </NavLink>
                </NavItem>
                
                <NavItem>
                  <NavLink
                   
                    to={ROUTES.ARRAY} tag={Link} >
                    
                    Array
                  </NavLink>
                </NavItem><NavItem>
                  <NavLink
                   
                    to={ROUTES.LINKEDLIST} tag={Link} >
                    
                    Linked List
                  </NavLink>
                </NavItem>
                </Nav>
              </UncontrolledCollapse>
        </Navbar>
  
  

);
return(
  <div>
    <Navigationn />
     
  </div>
);
}
export default Navigation;