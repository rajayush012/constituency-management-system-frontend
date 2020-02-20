import React from 'react';
import {withRouter} from 'react-router-dom';
import MlaNavbar from './MlaNavbar';
import {url} from '../../UrlAddress'
import { ListGroup, Button } from 'react-bootstrap';
// education infrastructure healthcare tourism miscellaneous remaining
class MlaUpdateFund extends React.Component{
    constructor(){
        super();
    this.state={fund:{}};
    this.handleEducationChange=this.handleEducationChange.bind(this);
    this.handleInfrastructureChange=this.handleInfrastructureChange.bind(this);
    this.handleHealthcareChange=this.handleHealthcareChange.bind(this);
    this.handleTourismChange=this.handleTourismChange.bind(this);
    this.handleMiscellaneousChange=this.handleMiscellaneousChange.bind(this);
    this.handleRemainingChange=this.handleRemainingChange.bind(this);
    this.submit=this.submit.bind(this);
    }
    componentDidMount(){
        fetch(url+"mla/viewfund/"+this.props.match.params.userid).then(res=>res.json()).then((res)=>{
            console.log(res);
            this.setState({fund:res});
        }).catch(err=>console.log(err));
    }
    handleEducationChange(event){
        this.setState({fund:{...this.state.fund,education:event.target.value}});
    }
    handleInfrastructureChange(event){
        this.setState({fund:{...this.state.fund,infrastructure:event.target.value}});
    }
    handleHealthcareChange(event){
        this.setState({fund:{...this.state.fund,healthcare:event.target.value}});
    }
    handleTourismChange(event){
        this.setState({fund:{...this.state.fund,tourism:event.target.value}});
    }
    handleMiscellaneousChange(event){
        this.setState({fund:{...this.state.fund,miscellaneous:event.target.value}});
    }
    handleRemainingChange(event){
        this.setState({fund:{...this.state.fund,remaining:event.target.value}});
    }
    submit(){
        let data=JSON.stringify(this.state.fund);
        fetch(url+"mla/updatefund/"+this.props.match.params.userid,{
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body:data
        }).then((res) => {
            console.log(res);
            alert("Funds Updated")
          }).catch((err) => {
            console.log(err)
          })
        }
render(){
    return(<div className="mlaLoginForm">
       <MlaNavbar userid={this.props.match.params.userid}/>
       

        <div className="container text-center containerbox">

<div className="text-center mt-5">
        <h1>Fund Status</h1>
    </div>
<hr></hr>
    <ListGroup>

        <ListGroup.Item variant="primary"><div className="form-group">
            <label>Education</label>
            <input type="text" onChange={this.handleEducationChange} value={this.state.fund.education}/> 
        </div></ListGroup.Item>
        <ListGroup.Item variant="secondary"><div className="form-group">
            <label>Infrastructure</label>
            <input type="text" onChange={this.handleInfrastructureChange} value={this.state.fund.infrastructure}/>
        </div></ListGroup.Item>
        <ListGroup.Item variant="success"><div className="form-group">
            <label>Healthcare</label>
            <input type="text" onChange={this.handleHealthcareChange} value={this.state.fund.healthcare}/> 
        </div></ListGroup.Item>
        <ListGroup.Item variant="danger"> <div className="form-group"> 
            <label>Tourism</label>
            <input type="text" onChange={this.handleTourismChange} value={this.state.fund.tourism}/>
        </div></ListGroup.Item>
        <ListGroup.Item variant="warning"><div className="form-group">
            <label>Miscellaneous</label>
            <input type="text" onChange={this.handleMiscellaneousChange} value={this.state.fund.miscellaneous}/>
        </div></ListGroup.Item>
        <ListGroup.Item variant="info"><div className="form-group">
            <label>Remaining Funds</label>
            <input type="text" onChange={this.handleRemainingChange} value={this.state.fund.remaining}/> 
        </div></ListGroup.Item>
        <Button type="primary" onClick={this.submit}>
            Update Funds
        </Button>
    </ListGroup>
</div>

       </div>
    );
}
}
export default withRouter(MlaUpdateFund);