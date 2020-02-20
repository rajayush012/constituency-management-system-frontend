import React from 'react';
import { Link } from "react-router-dom";
import './login.css'
import {Card, Button} from 'react-bootstrap';

class Login extends React.Component {
  
  render() {
    return (
      <div>
        <div>
          <Button className="m-3" variant="outline-primary">
          <Link to="/" className="blink">Back</Link></Button>
        </div>
        <div className="container containerbox text-center">
          <div className="cardbox">
            <Card className="cd" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>

                <Button variant="success"><Link className="text-link" to="/mla/login">Login as a MP/MLA</Link></Button>
              </Card.Body>
            </Card>
          </div>
          <div className="cardbox">
            <Card className="cd" style={{ width: '18rem' }}>
              <Card.Img variant="top" src="data:image/jpeg;base64,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" />
              <Card.Body>

                <Button variant="info"><Link className="text-link" to="/resident/login">Login as a Resident</Link></Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;