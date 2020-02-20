import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import {url} from '../../UrlAddress'
import {Link} from 'react-router-dom';

class Mlasignup extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            constituency:"",
            email:"",
            password:""
        }
        this.handleConstituencyChange=this.handleConstituencyChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.signup=this.signup.bind(this);
    }
    handleConstituencyChange(event){
        this.setState({constituency:event.target.value});
    }
    handleNameChange(event){
        this.setState({name:event.target.value});
    }
    handleEmailChange(event){
        this.setState({email:event.target.value});
    }
    handlePasswordChange(event){
        this.setState({password:event.target.value});
    }
    signup(){
        let data=JSON.stringify(this.state);
        console.log(data);
        fetch(url+"mla/register",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:data
        }).then((res) => {
            this.props.history.push("/mla/login");
          }).catch((err) => {
            console.log(err)
          })
    }
render(){
    return(
        <div className="container boxed">
    <div className="MlaSignupForm">
    <div className="text-center">
        <h1>Sign Up as a MLA/MP</h1>
    </div>
    <div>

        <div className="form-group">
           <label>Name</label>
           <input className="form-control" type="text" onChange={this.handleNameChange}/>
        </div>
        <div className="form-group">
            <label>Constituency</label>
            <input className="form-control" onChange={this.handleConstituencyChange}/>
        </div>
        <div className="form-group">
           <label>Email</label>
           <input className="form-control" type="email" onChange={this.handleEmailChange}/>
        </div>
        <div className="form-group">
           <label>Password</label>
           <input className="form-control" type="password" onChange={this.handlePasswordChange}/>
        </div>
        <Button type="primary" onClick={this.signup}>Signup</Button>
        <Button className="ml-3" type="submit" variant="danger"><Link className="text-link" to='/'>Back</Link></Button>

        </div>
        </div>
       </div>
       
    );
}
}
export default withRouter(Mlasignup);