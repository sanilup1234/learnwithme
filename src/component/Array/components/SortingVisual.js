import React from "react"
import {linear_search,binary_search} from "../algorithm/linear_search"
import { Button } from "reactstrap";
function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const c1 = '#3f51b5'
  const c2 = '#c2185b' 
class SortingVisual extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={array:[]};
    }
    componentDidMount() {
        this.generateArray();
      }
    
     generateArray()
    {
        const array = [];
        for(let i=0;i<10;i++)
        {
            array.push(randomIntFromInterval(10,800));
        }
        array.sort(function(a, b){return a - b});
        this.setState({array});

        const node1=document.getElementById("he");
    node1.innerHTML = "Start Search"
    }
    linear_search()
    {
    const {array} = this.state;
    const anim = linear_search(array);
    
    for(let i=0;i<anim.length;i++)
    {
        const arrayBars = document.getElementsByClassName('col');
        const [barOneIdx,barTwoIdx] = anim[i];
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
                barOneStyle.backgroundColor = c2;
                barTwoStyle.backgroundColor = c1;
                const node=document.getElementById("he");
                node.innerHTML="<span style='color:red;'>found "+array[barOneIdx]+"</span>"
              }, i * 500);
    }
    setTimeout(() => {
    const node1=document.getElementById("he");
    node1.innerHTML = "Search_completed"
    },anim.length*500);
    
    }
    binary_search()
    {
        const {array} = this.state;
        const anim = binary_search(array,array[2]);
        
    for(let i=0;i<anim.length;i++)
    {
        const arrayBars = document.getElementsByClassName('col');
        const [barOneIdx,barTwoIdx] = anim[i];
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
                
                barOneStyle.backgroundColor = c2;
                barTwoStyle.backgroundColor = c1;
                const node=document.getElementById("he");
                node.innerHTML="<span style='color:red;'>found "+array[barOneIdx]+"</span>"
              }, i * 500);
    }
    setTimeout(() => {
    const node1=document.getElementById("he");
    node1.innerHTML = "Search_completed"
    },anim.length*500);
    }
    render()
    {
        const {array} = this.state;
        
        return(
            <div>
                <Button outline color="primary" onClick={()=>{this.generateArray()} } className="btn">Genearte Array</Button>
                <Button outline color="primary" onClick={()=>{this.linear_search()}} className="btn">LinearSearch</Button>
                <Button outline color="primary" onClick={()=>{this.binary_search()}} className="btn">Binary Search</Button>
                <table className="arr">
                    <tr className="row" >
                    {array.map((value,idx) => {
                         return <td className="col" key={idx} style={{
                            backgroundColor: c1,color:"white",border:"2px solid black"}}>{value} </td>;
                    })}
                    </tr>
                 </table>
                 <h1 id = "he" className="hrr"></h1>
            </div>
        )
    }
}
export default SortingVisual
