import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Residentlogin from './pages/resident/Residentlogin';
import Residentsignup from './pages/resident/Residentsignup';
import Residenthome from './pages/resident/Residenthome';
import SubmitProblem from './pages/resident/SubmitProblem';
import ResidentViewProblems from './pages/resident/ResidentViewProblems';
import ResidentViewFund from './pages/resident/ResidentViewFund';
import Mlahome from './pages/mla/Mlahome';
import Mlalogin from './pages/mla/Mlalogin';
import Mlasignup from './pages/mla/Mlasignup';
import MlaViewProblems from './pages/mla/MlaViewProblems';
import MlaViewProblem from './pages/mla/MlaViewProblem';
import MlaUpdateProblem from './pages/mla/MlaUpdateProblem';
import MlaUpdateFund from './pages/mla/MlaUpdateFund';

import {Route,BrowserRouter as Router} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

ReactDOM.render((
    <Router>
      <Route exact path = "/" component = {App}/>
      <Route exact path = "/signup" component = {Signup} />
      <Route exact path = "/login" component = {Login} />
      <Route exact path = "/resident/signup" component = {Residentsignup} />
      <Route exact path = "/resident/login" component = {Residentlogin} />
      <Route path="/resident/user/:userid" component={Residenthome}/>
      <Route path="/resident/submitproblem/:userid" component={SubmitProblem}/>
      <Route path="/resident/viewproblems/:userid" component={ResidentViewProblems}/>
      <Route path="/resident/viewfund/:userid" component={ResidentViewFund}/>
      <Route exact path = "/mla/signup" component = {Mlasignup} />
      <Route exact path = "/mla/login" component = {Mlalogin} />
      <Route path="/mla/user/:userid" component={Mlahome}/>
      <Route path="/mla/viewproblems/:userid" component={MlaViewProblems}/>
      <Route path="/mla/viewproblem/:userid/:problemid" component={MlaViewProblem}/>
      <Route path="/mla/updateproblem/:userid/:problemid" component={MlaUpdateProblem}/>
      <Route path="/mla/updatefund/:userid" component={MlaUpdateFund}/>
   </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
