import React from 'react';
import { Button } from 'react-bootstrap';
import {withRouter} from 'react-router-dom'
import ResidentNavbar from './ResidentNavbar';
import {url} from '../../UrlAddress'
class Residentsignup extends React.Component{
    constructor(){
        super();
        this.state={
            title:"",
            description:"",
            constituency:"",
        }
        this.handleConstituencyChange=this.handleConstituencyChange.bind(this);
        this.handleTitleChange=this.handleTitleChange.bind(this);
        this.handleDescriptionChange=this.handleDescriptionChange.bind(this);
        this.handleDepartmentChange=this.handleDepartmentChange.bind(this);
        this.signup=this.signup.bind(this);
    }
    handleConstituencyChange(event){
        this.setState({constituency:event.target.value});
    }
    handleDescriptionChange(event){
        this.setState({description:event.target.value});
    }
    handleTitleChange(event){
        this.setState({title:event.target.value});
    }
    handleDepartmentChange(event){
        this.setState({department:event.target.value});
    }
    signup(){
        let data=JSON.stringify(this.state);
        console.log(data);
        fetch(url+"resident/submitproblem/"+this.props.match.params.userid,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:data
        }).then((res) => {
           return res.json();
          }).then(res=>console.log(res)).catch((err) => {
            console.log(err)
          })
    }
render(){
    return(<div className="ResidentSignupForm">
        <ResidentNavbar userid={this.props.match.params.userid}/>
        <div className="containerbox container">
        <div className="text-center">
                    <h1>Submit a problem</h1>
                </div>
        <div className="form-group">
           <label>Problem Title</label>
           <input className="form-control" type="text" onChange={this.handleTitleChange}/>
        </div>
        <div className="form-group">
           <label>Department</label>
           <input className="form-control" type="text" onChange={this.handleDepartmentChange}/>
        </div>
        <div className="form-group">
           <label>Problem Description</label>
           <textarea className="form-control" type="text" onChange={this.handleDescriptionChange}/>
        </div>
        <div className="form-group">
            <label>Constituency</label>
            <input className="form-control" onChange={this.handleConstituencyChange}/>
        </div>
        <Button type="primary" onClick={this.signup}>Submit</Button>
       </div>
       </div>
    );
}
}
export default withRouter(Residentsignup);