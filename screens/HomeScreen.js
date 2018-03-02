import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

// 2018-03-01 SLA:  For FB Login START
import FBSDK, { LoginButton, AccessToken } from 'react-native-fbsdk';
// 2018-03-01 SLA:  For FB Login END

export default class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Tamby Code Challenge: FB Login
        </Text>
                <LoginButton
                    // Note:  using default permission 'public_profile'
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert("Login failed with error: " + result.error);
                            } else if (result.isCancelled) {
                                alert("Login was cancelled");
                            } else {
                                AccessToken.getCurrentAccessToken().then((data)=>{
                                    if(data) {
                                        this.props.navigation.navigate('UserDetail',{data});
                                    }
                                });
                                // this.props.navigation.navigate('Thinker', {});
                                // alert("Login was successful with permissions: " + result.grantedPermissions)
                            }
                        }
                    }
                    onLogoutFinished={() => alert("User logged out")} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
