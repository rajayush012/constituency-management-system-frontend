import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import {url} from '../../UrlAddress'
import { Link } from 'react-router-dom'

class Residentlogin extends React.Component{
    constructor(){
        super();
        this.state={
            email:"",
            password:""
        }
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
        this.login=this.login.bind(this);
    }
    handleEmailChange(event){
        this.setState({email:event.target.value});
    }
    handlePasswordChange(event){
        this.setState({password:event.target.value});
    }
    login(){
        let data=JSON.stringify(this.state);
        console.log(data);
        fetch(url+"resident/login",{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:data
        }).then((res) => {
            if(res.status!==200){throw new Error("User Not Found");}
            else{return res.json( )}
          }).then((res)=>{
              this.props.history.push("/resident/user/"+res._id);
          }).catch((err) => {
              console.log(err);
            alert(err); 
          })
    }
render(){
    return(
        <div className="container boxed">
    <div className="ResidentLoginForm">
    <div className="text-center">
                    <h1>Log in as a Resident</h1>
                </div>
    <div>
                    <div className="form-group">
                        <label>Email</label>
                        <input className="form-control" type="email" onChange={this.handleEmailChange} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input className="form-control" type="password" onChange={this.handlePasswordChange} />
                    </div>
                    <Button type="primary" onClick={this.login}>Login</Button>
                    <Button className="ml-3" type="submit" variant="danger"><Link className="text-link" to='/'>Back</Link></Button>
                </div>
                </div>
       </div>
    );
}
}
export default withRouter(Residentlogin);