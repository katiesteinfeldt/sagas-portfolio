import React, { Component } from 'react';
import { connect } from 'react-redux';


class ProjectItem extends Component {

    render() {
        let descriptionDisplay;
        let thumbnailDisplay;
        let websiteDisplay;
        let githubDisplay;

        if (this.props.project.description === '') {
            descriptionDisplay = null;
        }
        else {
            descriptionDisplay = this.props.project.description;
        }

        if (this.props.project.thumbnail === '') {
            thumbnailDisplay = null;
        }
        else {
            thumbnailDisplay = this.props.project.thumbnail;
        }

        if (this.props.project.website === '') {
            websiteDisplay = null;
        }
        else {
            websiteDisplay = this.props.project.website;
        }

        if (this.props.project.github === '') {
            githubDisplay = null;
        }
        else {
            githubDisplay = this.props.project.github;
        }

        return (
            <div>
                {descriptionDisplay}
                <br />
                {thumbnailDisplay}
                <br />
                {websiteDisplay}
                <br/>
                {githubDisplay}
            </div>
        );
    }
}





const mapStateToProps = (reduxState) => {
    return reduxState;
}

export default (connect(mapStateToProps)(ProjectItem));
