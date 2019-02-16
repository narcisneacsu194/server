import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import * as actions from '../actions';

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render(){
    return (
        <BrowserRouter>
         <div className="container">
           <Header/>
           <Route exact path="/" component={this.props.auth ? Dashboard : Landing} />
           <Route exact path="/surveys" component={this.props.auth ? Dashboard : Landing}/>
           <Route path="/surveys/new" component={this.props.auth ? SurveyNew : Landing}/>
         </div>
        </BrowserRouter>
    );
  }
};

function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps, actions)(App);