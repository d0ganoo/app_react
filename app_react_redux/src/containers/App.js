import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/App.css';
import { displayButtonText, displayTextarea, hideButtonText } from '../actions/simpleActions';

class App extends Component{

    handleChange = (event) => {
        console.log(this.props);
        this.props.displayTextarea(event.target.value);
    }

    displayButtonText = () => {
        this.props.displayButtonText();
    }

    hideButtonText = () => {
        this.props.hideButtonText();
    }

    render(){
        console.log(this.props);
        return (
            <div className="App">
                <header className="App-header">
                    Techno watch
                </header>

                <p>{this.props.simpleReducer.result}</p>

                <button onClick={this.displayButtonText}>Display Text</button>
                <button onClick={this.hideButtonText}>Hide Text</button>
                <br/>
                <textarea onChange={this.handleChange} value={this.props.text}/>
                <p>{this.props.simpleReducer.input}</p>
            </div>
        );
    }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
    displayButtonText: () => dispatch(displayButtonText()),
    hideButtonText: () => dispatch(hideButtonText()),
    displayTextarea: (text) => dispatch(displayTextarea(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

