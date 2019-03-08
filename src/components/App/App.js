import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {

componentDidMount(){
  this.getProjects();
}

getProjects = () => {
  console.log('going to get projects');
  this.props.dispatch({type: 'FETCH_PROJECTS'});
}











  // Renders the entire app on the DOM
  render() {
    console.log(this.props.projects);
    return (
      <div className="App">
        <p>Empty Page</p>
      </div>
    );
  }
}







const mapStateToProps = (reduxState) => {
  return reduxState;
}

export default (connect(mapStateToProps)(App));
