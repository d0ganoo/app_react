import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayButtonText, hideButtonText } from '../actions/simpleActions';

class Buttons extends Component {

    displayButtonText = () => {
        this.props.displayButtonText();
    }

    hideButtonText = () => {
        this.props.hideButtonText();
    }
    render() {
        return (
            <React.Fragment>
                <button onClick={this.displayButtonText}>Display Text</button>
                <button onClick={this.hideButtonText}>Hide Text</button>
                <br/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
    displayButtonText: () => dispatch(displayButtonText()),
    hideButtonText: () => dispatch(hideButtonText())
})

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);