import React from 'react';
import {withRouter} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
class ResidentNavbar extends React.Component{
render(){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand >CMS</Navbar.Brand>
        <Nav className="mr-auto">
        <Nav.Link onClick={()=>this.props.history.push("/resident/user/"+this.props.userid)}>Dashboard</Nav.Link>
          <Nav.Link onClick={()=>this.props.history.push("/resident/viewfund/"+this.props.userid)}>Fund Status</Nav.Link>
          <Nav.Link onClick={()=>this.props.history.push("/resident/submitproblem/"+this.props.userid)}>Submit a Problem</Nav.Link>
          <Nav.Link onClick={()=>this.props.history.push("/resident/viewproblems/"+this.props.userid)}>View Problem Status</Nav.Link>
        </Nav>
      </Navbar>
    );
}
}
export default withRouter(ResidentNavbar);