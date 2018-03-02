import React, { Component } from 'react';
import { View, Image } from 'react-native';

class Thinker extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('../images/ThinkerSmiley.jpg')}
                    featured
                />
            </View>
        );
    }
}

export default Thinker;