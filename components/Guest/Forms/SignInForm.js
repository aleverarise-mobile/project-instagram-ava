//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { Field, reduxForm } from 'redux-form'

const fieldName = (props) => {
    return (
        <View style={styles.textInput}>
            <TextInput 
                placeholder={props.ph}
                onChangeText={props.input.onChange}
                value={props.input.value}
                keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
                autoCapitalize='none'
                secureTextEntry={!!(props.input.name === 'password' || props.input.name === 'confirm_password' )}
                onBlur={props.input.onBlur}
            />
            
            {props.meta.touched && props.meta.error && <Text style={styles.errors}> {props.meta.error} </Text> }
        </View>
    )
}

const validate = (value) => {
    const errors = {}

    if(!value.email){
        errors.email = 'Required'
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)){
        errors.email = 'Must be a valid email'
    }

    if(!value.password){
        errors.password = 'Required'
    }else if(value.password.length < 5){
        errors.password = 'Must be at least 5 characters'
    }else if(value.password > 15){
        errors.password = 'Must be less than 15 characters'
    }

    return errors
}

const SignInForm = (props) => {
    return (
        <View>
            <Field name="email" component={fieldName} ph="email@email.com" />
            <Field name="password" component={fieldName} ph="******" />
            <Button 
                title="Login"
                onPress={props.handleSubmit( (value) => {console.log(value)})}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 16
    },
    errors: {
        color: '#FF0000'
    }
})

export default reduxForm({ form: 'SignInForm', validate })(SignInForm)