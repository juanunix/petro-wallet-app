import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import Login from './views/Login';
import Routes from './views/Routes';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Parse from 'parse';

Parse.initialize('myAppId');
Parse.serverURL = 'http://ec2-user@ec2-54-236-223-48.compute-1.amazonaws.com:1337/parse';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <div className="App">
                        {Parse.User.current() ? <Routes/> : <Login/>}
                    </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}

export default App;
