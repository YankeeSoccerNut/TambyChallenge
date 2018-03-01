import React from 'react';
import { StackNavigator } from 'react-navigation';

import UserDetail from '../screens/UserDetail';

export const AppStack = StackNavigator ({
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


