import React from 'react';
import { withRouter } from 'react-router-dom';
import ResidentNavbar from './ResidentNavbar';
import { url } from '../../UrlAddress'
import './stylesheets/residenthome.css';
import { Card, Button } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import ResidentChat from '../Chat';

class Residenthome extends React.Component {
    state = { resident: {} };
    componentDidMount() {
        fetch(url + "resident/user/" + this.props.match.params.userid).then(res => res.json()).then((res) => {
            console.log(res);
            this.setState({ resident: res });
        }).catch(err => console.log(err));
    }
    render() {
        return (<div className="ResidentLoginForm">
            <ResidentNavbar userid={this.props.match.params.userid} />

            <div className="containerbox container">
                <Card className="text-center">
                    <Card.Header><h2>My Dashboard</h2></Card.Header>
                    <Card.Body>

                        <Card.Text>
                            <div className="form-group">
                                <label>Name</label>
                                <span className="form-control"><b>{this.state.resident.name}</b></span>
                            </div>
                            <div className="form-group">
                                <label>Voter ID</label>
                                <span className="form-control"><b>{this.state.resident.voterID}</b></span>
                            </div>
                            <div className="form-group">
                                <label>Phone Number</label>
                                <span className="form-control"><b>{this.state.resident.number}</b></span>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <span className="form-control"><b>{this.state.resident.email}</b></span>
                            </div>
                        </Card.Text>
                        <Button variant="primary"><Link className="text-link" to='/'>Log out</Link></Button>
                    </Card.Body>
                    
                </Card>
                
            </div>
            <ResidentChat author='me'/>
        </div>
        );
    }
}
export default withRouter(Residenthome);