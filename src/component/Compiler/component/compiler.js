import React from 'react';
import Tabs from './Tabs';
import "./style.css"
import AceEditor from "react-ace";
import ReactMarkdown from "react-markdown"
import "ace-builds/src-noconflict/mode-c_cpp";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-twilight";
import { Container,Row,Col,Button,Input,UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,Badge} from 'reactstrap';

class Compiler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: 'false',
    code: '// Code',
    stdout:"",
    stderr:"",
    exitCode:"",
    errorType:"",
    cpuUsage:"",
    memoryUsage:"",
    lang:"C++",
    theme:"monokai",
    input:"",
    enable:true,
    md : '# This is a header\n\nAnd this is a paragraph'
};

}
//,stdout:res["stdout"],stderr:res["stderr"]
//

callAPI(req) {
    fetch("http://52.247.56.134:9000/testAPI",req)
        .then(res => res.json())
        .then(res =>  this.setState({ apiResponse:res}))
        .then(this.setState({stdout:this.state.apiResponse["stdout"]}))
        .then(this.setState({stderr:this.state.apiResponse["stderr"]}))
        .then(this.setState({exitCode:this.state.apiResponse["exitCode"]}))
        .then(this.setState({enable:true}))
        
        

      

}

updateCode(value) {
  this.setState({
    code:value,
  });
}  
onSubmit()
{
  this.setState({enable:false});
  const coded=this.state.code
  const language = this.state.lang
  const inp = this.state.input
  const opt={
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
  },
    body: JSON.stringify({code:coded,lang:language,input:inp})
  }
this.callAPI(opt)
}
// getNumbers(api) {
//     if (api) {
//         Object.keys(api).map( (key) => {
//             return this.setState({key:""+api[key]});
//         });
//     } 
// }
printop()
{
let stdoutt = this.state.stdout

  return stdoutt;

}
printer()
{
  
  let stderr = this.state.stderr
  if(this.state.exitCode === 0)
  {
    
    return <h4 style={{color:"green"}}>compilation successfull</h4> 
  }
  
  return stderr
}

setC()
{
this.setState({lang:"C"})
}
setCpp()
{
this.setState({lang:"C++"})
}
setPython()
{
this.setState({lang:"Python"})
}
setMonokai()
{
this.setState({theme:"monokai"})
}
setDark()
{
  this.setState({theme:"twilight"})
}
setLight()
{
  this.setState({theme:"github"})
}
onInput(event) {
  this.setState({input: event.target.value});
}  
  render(){
  
   
 // console.log(api)
 
// let split_api = api.split(",")
// console.log(split_api)
// let stdoutt = split_api[1].split(":")[1];
// stdoutt = stdoutt.slice(1,stdoutt.length-1)
// let stderrr = split_api[0].split(":")[1];
// let exitCodee = split_api[2].split(":")[1];
// this.setState({stdout:stdoutt,stderr:stderrr,exitCode:exitCodee})

    // let options ={
    //   lineNumbers: true,
    //   matchBrackets: true,
    //   mode: "text/x-c++src", 
    //   theme:"material",
    //   keymap:"sublime",
      
    // }
   // let api = this.state.apiResponse
    
    // let stdoutt = this.state.stdout;
    // let stderrr = this.state.stderr;
    // if(stderrr === "")
    // stderrr = "Compilation Successfull";
    // <CodeMirror value={this.state.code} onChange={this.updateCode.bind(this)} options={options} className="codedit"/>
       
	  return(

      
    
        <Container fluid="true" style={{backgroundColor:"#ffffff",color:"black"}}>
         <Row>
           <Col></Col><Col></Col>
           <Col>
           
    <UncontrolledDropdown>
      <DropdownToggle caret>
       {this.state.theme}
      </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem onClick={this.setMonokai.bind(this)}>monokai</DropdownItem>
        <DropdownItem onClick={this.setDark.bind(this)}>twilight</DropdownItem>
        <DropdownItem onClick={this.setLight.bind(this)}>github</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
           </Col>
           <Col><UncontrolledDropdown style={{float:"left"}}>
      <DropdownToggle caret>
        {this.state.lang}
      </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem onClick={this.setCpp.bind(this)}>C++</DropdownItem>
        <DropdownItem onClick={this.setC.bind(this)}>C</DropdownItem>
        <DropdownItem onClick={this.setPython.bind(this)}>Python</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown></Col>
           </Row>
          
       <Row>
         
         <Col xs="6">
        
         <div>
     
      <Tabs>
        <div label="Question">
        <ReactMarkdown source={this.state.md} />
        </div>
        <div label="Solution">
          Will be Provided Soon !!
        </div>
        <div label="Hints">
         Will be provided soon !!
        </div>
      </Tabs>
    </div>
    
         </Col>
         <Col xs="6">
         
         <AceEditor
    mode="c_cpp"
    theme={this.state.theme}
    fontSize={18}
    width="100%"
    height={"600px"}
    showPrintMargin={true}
    showGutter={true}
    highlightActiveLine={true}
    value = {this.state.code}
    onChange={this.updateCode.bind(this)}
    name="ace-editor"
    editorProps={{ $blockScrolling: true }}
  />
       
       </Col>
       </Row>
       <hr />
       <Row>
       <Col style={{border:"1px solid black"}}><h4>INPUT</h4> <Input type="textarea" value={this.state.input} onChange={this.onInput.bind(this)} className="textare" /></Col>
    <Col style={{border:"1px solid black",height:"125px",overflowY:"scroll"}}><h4>OUTPUT</h4><div style={{whiteSpace:"pre-wrap"}}><p>{this.printop()}</p></div></Col>
    <Col style={{border:"1px solid black",height:"125px",overflowY:"scroll"}}><h4>Compiler Status</h4><div style={{whiteSpace:"pre-wrap",color:"red"}}>{this.printer()}</div></Col>
       <Col>

        <Button onClick={this.onSubmit.bind(this)} style={{float:"right",marginRight:"15px"}} disabled={!this.state.enable}>SUBMIT</Button>
        </Col>
            </Row>
      </Container>
    
  );}
}

export default Compiler;
