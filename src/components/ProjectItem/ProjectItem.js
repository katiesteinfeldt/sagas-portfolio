import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProjectItem extends Component {










    render() {
        return (
            <div>
                <div>{this.props.project.name}</div>
            </div>
        );
    }
}







const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default (connect(mapStateToProps)(ProjectItem));
