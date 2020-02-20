import React from 'react';
import {withRouter} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';
class MlaNavbar extends React.Component{
render(){
    return(
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand >CMS</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link onClick={()=>{this.props.history.push("/mla/user/"+this.props.userid)}}>Home</Nav.Link>
          <Nav.Link onClick={()=>this.props.history.push("/mla/updatefund/"+this.props.userid)}>Update Funds</Nav.Link>
          <Nav.Link onClick={()=>this.props.history.push("/mla/viewproblems/"+this.props.userid)}>View All Problems</Nav.Link>
        </Nav>
      </Navbar>
    );
}
}
export default withRouter(MlaNavbar);