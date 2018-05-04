//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import SignInForm from './Forms/SignInForm';

// create a component
class SignIn extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text>Component SignIn</Text>
                <SignInForm />
                <Button 
                    title="Navigate to Sing-Up"
                    onPress={ () => { navigation.navigate('SignUp') } }
                />
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 20
    },
});

//make this component available to the app
export default SignIn;
