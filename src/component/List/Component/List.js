import React from "react"
import List_class from "./List_class/List_class"
import {Container,Button,Input} from "reactstrap"
const c1 = '#3f51b5'
  const c2 = '#c2185b' 
export default class List extends React.Component
{
    constructor()
    {
        super();
        this.state={
            
            List: new List_class(),
            input:'',
            id:0,
            count:0

        }
        this.OnButtonInsert.bind(this);
        this.onNumberInput.bind(this)
    }
    componentDidMount()
    {
    // const List = new List_class();
    //  for(let i=0;i<10;i++)
    //  {
    //   List.insert(i,i);
    //  }
    //  this.setState({List});
     
    }
    onNumberInput(e)
    {
        document.getElementById("hrr").innerHTML="";
     this.setState({input:e.target.value})
    }
    OnButtonInsert()
    {
        document.getElementById("hrr").innerHTML="";
        const num = Number(this.state.input)
        const l = this.state.List;
        const ide = this.state.id
        let ct = this.state.count
        if(num !==0)
        {
         l.insert(ide,num);
         ct= ct+1
        }
        
        this.setState({List:l})
        this.setState({input:''})
        this.setState({id:ide+1})
        this.setState({count:ct})
        
    }
    OnButtonDelete()
    {
        const num = Number(this.state.input)
        const l = this.state.List;
        let ct = this.state.count
        let i
        if(num !==0)
        {
           i=l.remove(num);
           ct=ct-1
        }
        this.setState({List:l})
        this.setState({input:''})
        this.setState({count:ct})
        if(i===0)
        document.getElementById("hrr").innerHTML="<h1>Failed to delete "+num+ " </h1>";
    }
    OnButtonSearch()
    {
        const ct = this.state.count
        const l = this.state.List;
        const num = Number(this.state.input)
        if(num !==0)
        {
        const anim = l.search(num)
        for(let i=0;i<anim.length;i++)
        {
        const arrayBars = document.getElementsByClassName('rectangle');
        const [barOneIdx,barTwoIdx] = anim[i];
        const barOneStyle = arrayBars[barOneIdx].style
        const barTwoStyle = arrayBars[barTwoIdx].style
        setTimeout(() => {
                barOneStyle.backgroundColor = c2;
                barTwoStyle.backgroundColor = c1;
               
              }, i * 500);
    }
    if(anim.length <=2*ct-1){
    setTimeout(() => {
        const node1=document.getElementById("hrr");
        node1.innerHTML = "Search_completed and We found "+num
        },anim.length*500);}
        else{
            setTimeout(() => {
                const node1=document.getElementById("hrr");
                node1.innerHTML = "Search_completed and We Cant find "+num
                },anim.length*500);}
        }
        }
    
    render()
    {

        const arr = this.state.List.traverse();
       
        return (
            <Container fluid = "true" style={{height:"680px",backgroundColor:"white",color:"black"}}>
        <div id = "parent" style={{backgroundColor:"white"}}>
            <h1> Welcome in Land of Linked List...</h1>
             <div className="inp_butt">
            <Input type="number" value={this.state.input} onChange={(e) => this.onNumberInput(e)} className="num_inp" placeholder="Enter Value"/>
            <Button outline color="danger" onClick={() => this.OnButtonInsert()} className="butt">Insert</Button>
            <Button outline color="danger" onClick={() => this.OnButtonDelete()} className="butt">Delete</Button>
            <Button outline color="danger" onClick={() => this.OnButtonSearch()} className="butt">Search</Button>
            </div>
            <div id="container">
                {arr.map(
                    (key,item)=>(
                    <div id="container">
                    <div key={item} className="rectangle" style={{color:"white"}}>{key} </div><div className="arrow">&#8594;</div></div>
                    
                    
                    ))
                    }
                   <div id="container">
                    <div className="rectangle" style={{color:"white"}}>NULL</div></div> 
            </div>
           <h1 id="hrr"></h1>
        </div>
        </Container>
        );
    }
}