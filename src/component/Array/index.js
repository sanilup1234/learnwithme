import React from 'react';
import './App.css';
import SortingVisual from "./components/SortingVisual"
//
import {Container} from "reactstrap"
function App() {
  
  return (
    <div>
       <Container fluid = "true" style={{height:"760px",backgroundColor:"white",color:"black"}}>
    <SortingVisual></SortingVisual>
    </Container>
    </div>
  );
}

export default App;
