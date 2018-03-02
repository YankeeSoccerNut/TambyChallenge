import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

// 2018-03-01 SLA:  For FB Login START
import FBSDK, { LoginButton, GraphRequest, GraphRequestManager } from 'react-native-fbsdk';
// 2018-03-01 SLA:  For FB Login END

class UserDetail extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            pic: ''
        }
    }

    //Create response callback.
    _responseInfoCallback = (error, result) => {
        if (error) {
            alert('Error fetching data: ' + error.toString());
        } else {
            this.setState({ name: result.name, pic: result.picture.data.url });
        }
    }

    componentWillMount() {
        // Create a graph request asking for user information with a callback to handle the response.
        const infoRequest = new GraphRequest(
            '/me?fields=name,picture',
            null,
            this._responseInfoCallback
        );
        // Start the graph request.
        new GraphRequestManager().addRequest(infoRequest).start();
    }

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcomeMsg}>Welcome</Text>
                <Text style={styles.name}>{this.state.name}</Text>
                <Image source={{ uri: this.state.pic }} style={styles.image} />
                <LoginButton
                    onLogoutFinished={() => {
                        this.props.navigation.goBack();
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 200,
        width: 200,
        margin: 20
    },
    welcomeMsg: {
        fontSize: 40
    },
    name: {
        fontSize: 40
    }
});


export default UserDetail;