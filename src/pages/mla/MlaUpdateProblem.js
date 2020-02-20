import React from 'react';
import {withRouter} from 'react-router-dom';
import MlaNavbar from './MlaNavbar';
import {url} from '../../UrlAddress'
import { Button } from 'react-bootstrap';
class MlaUpdateProblem extends React.Component{
    constructor(){
        super();
    this.state={problem:{}};
    this.handleStatusChange=this.handleStatusChange.bind(this);
    this.handlePriorityChange=this.handlePriorityChange.bind(this);
    this.submit=this.submit.bind(this);
    }
    componentDidMount(){
        console.log(this.props.match.params.problemid);
        fetch(url+"mla/viewproblem/"+this.props.match.params.problemid).then(res=>res.json()).then((res)=>{
            console.log(res);
            this.setState({problem:res});
        }).catch(err=>console.log(err));
    }
    handlePriorityChange(event){
        this.setState({problem:{...this.state.problem,priority:event.target.value}});
    }
    handleStatusChange(event){
        this.setState({problem:{...this.state.problem,problemStatus:event.target.value}});
    }
    submit(){
        let data=JSON.stringify(this.state.problem);
        fetch(url+"mla/updateproblem/"+this.props.match.params.problemid,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:data
        }).then((res) => {
            alert("Problem Updated")
          }).catch((err) => {
            console.log(err)
          })
        }
render(){
    return(<div className="mlaLoginForm">
       <MlaNavbar userid={this.props.match.params.userid}/>
       <div className="text-center mt-5">
        <h1>Edit problem</h1>
    </div>
       <div className="container containerbox">
        <div className="form-group">
            <label>Title</label>
            <span className="form-control">{this.state.problem.title}</span>
        </div>
        <div className="form-group">
            <label>Department</label>
            <span className="form-control">{this.state.problem.department}</span>
        </div>
        <div className="form-group">
            <label>Description</label>
            <span className="form-control">{this.state.problem.description}</span>
        </div>
        <div className="form-group">
            <label>Status</label>
            <input className="form-control" type="text" onChange={this.handleStatusChange} value={this.state.problem.problemStatus}/>
            
        </div>
        <div className="form-group">
            <label>Constituency</label>
            <span className="form-control">{this.state.problem.constituency}</span>
        </div><div className="form-group">
            <label>Priority</label>
            <input className="form-control" type="text" onChange={this.handlePriorityChange} value={this.state.problem.priority}/>
        </div>
        <Button type="primary" variant="danger" onClick={this.submit}>
            Update Problem
        </Button>
       </div>
       </div>
    );
}
}
export default withRouter(MlaUpdateProblem);