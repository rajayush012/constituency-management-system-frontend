import React from 'react';
import { withRouter } from 'react-router-dom';
import ResidentNavbar from './ResidentNavbar';
import { url } from '../../UrlAddress'
import { ListGroup } from 'react-bootstrap'

class ResidentViewFund extends React.Component {
    constructor() {
        super();
        this.state = { fund: {} };
    }
    componentDidMount() {
        fetch(url + "resident/viewfund/" + this.props.match.params.userid).then(res => res.json()).then((res) => {
            console.log(res);
            this.setState({ fund: res });
        }).catch(err => console.log(err));
    }

    render() {
        return (<div className="residr=entSignupForm">

            <ResidentNavbar userid={this.props.match.params.userid} />


            <div className="container text-center containerbox">

            <div className="text-center mt-5">
                    <h1>Fund Status</h1>
                </div>
<hr></hr>
                <ListGroup>

                    <ListGroup.Item variant="primary"><div className="form-group">
                        <label>Education</label>
                        <label className="form-control">{this.state.fund.education}</label>
                    </div></ListGroup.Item>
                    <ListGroup.Item variant="secondary"><div className="form-group">
                        <label>Infrastructure</label>
                        <label className="form-control">{this.state.fund.infrastructure}</label>
                    </div></ListGroup.Item>
                    <ListGroup.Item variant="success"><div className="form-group">
                        <label>Healthcare</label>
                        <label className="form-control">{this.state.fund.healthcare}</label>
                    </div></ListGroup.Item>
                    <ListGroup.Item variant="danger"> <div className="form-group"> 
                        <label>Tourism</label>
                        <label className="form-control">{this.state.fund.tourism}</label>
                    </div></ListGroup.Item>
                    <ListGroup.Item variant="warning"><div className="form-group">
                        <label>Miscellaneous</label>
                        <label className="form-control">{this.state.fund.miscellaneous}</label>
                    </div></ListGroup.Item>
                    <ListGroup.Item variant="info"><div className="form-group">
                        <label>Remaining Funds</label>
                        <label className="form-control">{this.state.fund.remaining}</label>
                    </div></ListGroup.Item>

                </ListGroup>
            </div>
        </div>
        );
    }
}
export default withRouter(ResidentViewFund);