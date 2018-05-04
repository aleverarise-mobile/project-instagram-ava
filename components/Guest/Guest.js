import React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import SignIn from './SignIn';
import SignUp from './SignUp';

const Guest = StackNavigator({
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp
    }
},
{
    headerMode: 'none',
}
)

export { Guest }