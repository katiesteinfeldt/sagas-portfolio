import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.css';

class Header extends Component {










    render() {
        return (
            <div>
                <header className="header">Header component!</header>
            </div>
        );
    }
}







const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default (connect(mapStateToProps)(Header));
