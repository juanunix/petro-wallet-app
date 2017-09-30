import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './Styles';
import Parse from 'parse/react-native';

Parse.initialize('myAppId');
Parse.serverURL = 'http://ec2-54-236-223-48.compute-1.amazonaws.com:1337/parse';

export default class App extends React.Component {
    state = {
        text: "=D"
    };

    componentDidMount(){
        Parse.Cloud.run("hello").then((text) => {
            this.setState({text});
        }, (error) => {
            console.error(error);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={{width: 50, height: 50}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
                <Text style={styles.text}>{this.state.text}</Text>
            </View>
        );
    }
}
