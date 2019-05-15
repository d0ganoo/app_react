import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/App.css';
import { displayButtonText, displayTextarea, hideButtonText } from '../actions/simpleActions';
import {OutputTextarea} from '../components/OutputTextarea';
import InputTextarea from '../components/InputTextarea';
import Buttons from '../components/Buttons';

class App extends Component{
    render(){
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Punchlines</h1>
                </header>

                <p>{this.props.simpleReducer.result}</p>
                <Buttons />
                <InputTextarea />
                <OutputTextarea text={this.props.simpleReducer.input} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
 ...state
})

export default connect(mapStateToProps)(App);

