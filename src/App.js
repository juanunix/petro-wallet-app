import React, {Component} from 'react';
import './App.css';

import Login from './views/Login';
import Index from './views/Index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Parse from 'parse';

Parse.initialize('myAppId');
Parse.serverURL = 'http://ec2-user@ec2-54-236-223-48.compute-1.amazonaws.com:1337/parse';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    {Parse.User.current() ? <Index/> : <Login/>}
                </div>
            </MuiThemeProvider>
        );
    }
}

export default App;
