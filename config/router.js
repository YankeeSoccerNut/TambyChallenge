import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import UserDetail from '../screens/UserDetail';

export const AppStack = StackNavigator ({
    Home: {
        screen: UserDetail,
        navigationOptions: {
            title: 'USER DETAIL - NO STATE YET'
        },
    },
    UserDetail: {
        screen: UserDetail,
        navigationOptions: {
            title: 'USER DETAIL - NO STATE YET'
        },
    },
});

// first_name
// last_name
// picture 


