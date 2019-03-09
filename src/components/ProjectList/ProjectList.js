import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ProjectList.css';

class ProjectList extends Component {

    








    render() {
        return (
            <div className="projectList">
                <div>HELLO!</div>
            </div>
        );
    }
}







const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default (connect(mapStateToProps)(ProjectList));
