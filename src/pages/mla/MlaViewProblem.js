import React from 'react';
import {withRouter} from 'react-router-dom';
import MlaNavbar from './MlaNavbar';
import {url} from '../../UrlAddress'
import { Button } from 'react-bootstrap';
class MlaViewProblem extends React.Component{
    state={problem:{}};
    componentDidMount(){
        console.log(this.props.match.params.problemid)
        fetch(url+"mla/viewproblem/"+this.props.match.params.problemid).then(res=>res.json()).then((res)=>{
            console.log(res);
            this.setState({problem:res});
        }).catch(err=>console.log(err));
    }
    emailproblem(){
        fetch(url+"mla/viewproblem/forward/"+this.props.match.params.problemid).then((res)=>res.json())
        .then((res)=>{console.log(res);alert("Mailed to the department!")}).catch(err=>console.log(err));
    }
render(){
    return(<div className="mlaLoginForm">
       <MlaNavbar userid={this.props.match.params.userid}/>
       <div className="text-center mt-5">
        <h1>View a problem</h1>
    </div>
       <div className="container containerbox">
        <div className="form-group">
            <label>Title</label>
            <span className="form-control" >{this.state.problem.title}</span>
        </div>
        <div className="form-group">
            <label>Department</label>
            <span className="form-control" >{this.state.problem.department}</span>
        </div>
        <div className="form-group">
            <label>Description</label>
            <span className="form-control" >{this.state.problem.description}</span>
        </div>
        <div className="form-group">
            <label>Status</label>
            <span className="form-control" >{this.state.problem.problemStatus}</span>
        </div>
        <div className="form-group">
            <label>Constituency</label>
            <span className="form-control" >{this.state.problem.constituency}</span>
        </div><div className="form-group">
            <label>Priority</label>
            <span className="form-control" >{this.state.problem.priority}</span>
        </div>
        
        <Button type="primary" onClick={()=>this.props.history.push("/mla/updateproblem/"+this.props.match.params.userid+"/"+this.props.match.params.problemid)}>
            Edit Problem
        </Button>
        <Button className="ml-3" type="primary" variant="success" onClick={()=>this.emailproblem()}>
            Forward Problem
        </Button>
        </div>
       </div>
    );
}
}
export default withRouter(MlaViewProblem);