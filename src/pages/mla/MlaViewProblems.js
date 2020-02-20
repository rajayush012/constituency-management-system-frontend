import React from 'react';
import {withRouter} from 'react-router-dom'
import MlaNavbar from './MlaNavbar';
import {Table} from 'react-bootstrap';
import {url} from '../../UrlAddress'
class MlaViewProblems extends React.Component{
    constructor(){
        super();
        this.state={
            problems:[]
        }
    }
   componentDidMount(){
        fetch(url+"mla/viewproblems/"+this.props.match.params.userid).then((res) => {
           return res.json();
          }).then(res=>{
              console.log(res);this.setState({problems:res}
            )}).catch((err) => {
            console.log(err)
          })
        }
render(){
    return(<div className="MlaSignupForm">
        <MlaNavbar userid={this.props.match.params.userid}/>
        <div className="text-center mt-5">
        <h1>All Problems</h1>
    </div>
        <div>
          <Table bordered hover striped>
              <thead>
                    <td>Title</td>
                    <td>Department</td>
                    <td>Description</td>
                    <td>Status</td>
              </thead>
              <tbody>
                  {this.state.problems.map((problem,index)=>{
                      return <tr onClick={()=>this.props.history.push("/mla/viewproblem/"+this.props.match.params.userid+"/"+problem._id)} key={"Problem"+index}>
                          <td>{problem.title}</td>
                          <td>{problem.department}</td>
                          <td>{problem.description}</td>
                          <td>{problem.problemStatus}</td>
                      </tr>
                  })}
              </tbody>
          </Table>
       </div>
       </div>
    );
}
}
export default withRouter(MlaViewProblems);