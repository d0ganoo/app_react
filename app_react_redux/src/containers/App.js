import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../assets/css/App.css';
import { simpleAction } from '../actions/simpleActions';

class App extends Component{

    simpleAction = (event) => {
        this.props.simpleAction();
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                    Techno watch
                </header>

                <pre>
                {
                JSON.stringify(this.props)
                }
                </pre>

                <button onClick={this.simpleAction}>Test redux action</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
 ...state
})

const mapDispatchToProps = dispatch => ({
 simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

