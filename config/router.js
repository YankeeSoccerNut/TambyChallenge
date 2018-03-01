import React from 'react';
import { StackNavigator } from 'react-navigation';

import UserDetail from '../screens/UserDetail';

export const FirstRNativeStack = StackNavigator ({
    UserDetail: {
        screen: UserDetail,
        navigationOptions: {
            title: ({state}) => `${state.params.first_name}`
        },
    },
});

// first_name
// last_name
// picture 


