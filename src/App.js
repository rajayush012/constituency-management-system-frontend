import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Jumbotron, Button} from 'react-bootstrap';




class App extends React.Component {


render(){


  return (
    <div>
      <div className="">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">E Cell</a>
          <div className="navbar-boot">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/signup">Signup</Link>
              </li>
              <li className="nav-item">
                <Link to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className="mast-head">
        <Jumbotron className="jumbo">
          <h1 className="display-3 mt-5 pt-5">Constituency</h1>
          <h1 className="display-4">Management</h1>
          <h1 className="display-4">System</h1>
         
          <p className="mt-3">
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
       
      </div>
      <div className="about">

      </div>
      <div className="signup">

      </div>
      <div className="footer">

      </div>
    </div>
  );
}

}

export default App;