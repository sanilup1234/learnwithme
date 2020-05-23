import React from "react"

import {Button} from "reactstrap"

const bod = {grant_type:"client_credentials",
client_id:"351376b7-99cd-4b2e-8951-3cec3f1b5c29",
client_secret:"591ad241-dd23-4527-adf5-1145ad88b9ad",
resource:"https://management.azure.com/"}

const searchParams = Object.keys(bod).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(bod[key]);
  }).join('&');
  
const tent = "002e6b69-1ae3-43ad-8daf-62e0b072c199"
const opt={
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  },
    body: searchParams
  }
class GetToken extends React.Component
{
   
constructor(props)
{
    super(props);
    this.state={
       apiResponse:""
    }
}
token()
{
    fetch("https://login.microsoftonline.com/"+tent+"/oauth2/token",opt)
        .then(res => res.json())
        .then(res =>  this.setState({ apiResponse:res}))
}
render()
{
    return (
        <div>
       <h1>{console.log(this.state.apiResponse)}</h1>
       <Button onClick={this.token.bind(this)}>Get Token</Button>
        </div>
    );
}

}
export default GetToken;