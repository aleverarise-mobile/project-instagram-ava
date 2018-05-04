//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'
import SignUpForm from './Forms/SignUpForm';

// create a component
class SignUp extends Component {

    userRegister = (value) => {
        console.log(value);
        this.props.registration(value)
    }  

    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text>Component SignUp</Text>
                <SignUpForm registro={this.userRegister} />
                <Button 
                    title="Back to Sing-In"
                    onPress={ () => { navigation.goBack() } }
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

mapStateToProps = (state) => {
    return {
        numero: state.reducerPrueba
    }
}

mapDispatchToProps = (dispatch) => ({
    registration: (value) => {
        dispatch({type: 'REGISTRATION', payload: value})
    }
})
//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
