import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayTextarea } from '../actions/simpleActions';

class InputTextarea extends Component {

    handleChange = (event) => {
        this.props.displayTextarea(event.target.value);
    }

    render() {
        return (
            <textarea onChange={this.handleChange} value={this.props.text} />
        )
    }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
    displayTextarea: (text) => dispatch(displayTextarea(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputTextarea);