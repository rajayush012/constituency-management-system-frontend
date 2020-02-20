import React from 'react';
import {withRouter} from 'react-router-dom';
import MlaNavbar from './MlaNavbar';
import {url} from '../../UrlAddress'
import {Card, Button} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import ResidentChat from '../Chat';


class Mlahome extends React.Component{
    state={mla:{}};
    componentDidMount(){
        fetch(url+"mla/user/"+this.props.match.params.userid).then(res=>res.json()).then((res)=>{
            console.log(res);
            this.setState({mla:res});
        }).catch(err=>console.log(err));
    }
render(){
    return(<div className="mlaLoginForm">
       <MlaNavbar userid={this.props.match.params.userid}/>
       <div className="containerbox container">
                <Card className="text-center">
                    <Card.Header><h2>My Dashboard(MLA/MP)</h2></Card.Header>
                    <Card.Body>

                        <Card.Text>
                            <div className="form-group">
                                <label>Name</label>
                                <span className="form-control"><b>{this.state.mla.name}</b></span>
                            </div>
                            
                            <div className="form-group">
                                <label>Email</label>
                                <span className="form-control"><b>{this.state.mla.email}</b></span>
                            </div>
                        </Card.Text>
                        <Button variant="primary"><Link className="text-link" to='/'>Log out</Link></Button>
                    </Card.Body>
                    
                </Card>
            </div>

            <ResidentChat author='them'/>
       </div>
    );
}
}
export default withRouter(Mlahome);