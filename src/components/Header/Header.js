import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {










    render() {
        return (
            <div>
                Header component!
            </div>
        );
    }
}







const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default (connect(mapStateToProps)(Header));
