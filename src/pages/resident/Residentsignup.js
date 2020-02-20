import React from 'react';
import { Button } from 'react-bootstrap';
import './stylesheets/residentsignup.css';
import {withRouter} from 'react-router-dom'
import {url} from '../../UrlAddress'
import {Link} from 'react-router-dom';

class Residentsignup extends React.Component{
    constructor(){
        super();
        this.state={
            name:"",
            number:"",
            voterID:"",
            constituency:"",
            email:"",
            password:""
        }
        this.handleConstituencyChange=this.handleConstituencyChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleNumberChange=this.handleNumberChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.handleVoterIDChange=this.handleVoterIDChange.bind(this);
        this.signup=this.signup.bind(this);
    }
    handleConstituencyChange(event){
        this.setState({constituency:event.target.value});
    }
    handleNumberChange(event){
        this.setState({number:event.target.value});
    }
    handleVoterIDChange(event){
        this.setState({voterID:event.target.value});
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
        fetch(url+"resident/register",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:data
        }).then((res) => {
            this.props.history.push("/resident/login");
          }).catch((err) => {
            console.log(err)
          })
    }
render(){
    return(
    <div className="container boxed">
    <div className="ResidentSignupForm">
    <div className="text-center">
        <h1>Sign Up as a Resident</h1>
    </div>
        <div>
        <div className="form-group">
           <label>Name</label>
           <input className="form-control" type="text" onChange={this.handleNameChange}/>
        </div>
        <div className="form-group">
           <label>Contact Number</label>
           <input className="form-control" type="text" onChange={this.handleNumberChange}/>
        </div>
        <div className="form-group">
           <label>VoterID</label>
           <input className="form-control" onChange={this.handleVoterIDChange}/>
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
        <Button type="submit" onClick={this.signup}>Signup</Button>
        <Button className="ml-3" type="submit" variant="danger"><Link className="text-link" to='/'>Back</Link></Button>
        </div>
       </div>
       </div>
    );
}
}
export default withRouter(Residentsignup);