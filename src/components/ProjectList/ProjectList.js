import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProjectList extends Component {

    








    render() {
        return (
            <div>
                HELLO!
            </div>
        );
    }
}







const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default (connect(mapStateToProps)(ProjectList));
