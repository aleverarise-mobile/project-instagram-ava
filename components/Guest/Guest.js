import React from 'react'
import { Button, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

const SignIn = (props) => {
    const { navigation } = props
    return (
        <View>
            <Text>Component SignIn</Text>
            <Button 
                title="Navigate to Sing-Up"
                onPress={ () => { navigation.navigate('SignUp') } }
            />
        </View>
    )
}
const SignUp = (props) => {
    const { navigation } = props
    return (
        <View>
            <Text>Component SignUp</Text>
            <Button 
                title="Back to Sing-In"
                onPress={ () => { navigation.goBack() } }
            />
        </View>
    )
}

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