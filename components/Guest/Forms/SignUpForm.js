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
            <View style={styles.linea} />
            
            {props.meta.touched && props.meta.error && <Text style={styles.errors}> {props.meta.error} </Text> }
        </View>
    )
}
//existen estas dos formas la primera se muestran los errores desde que se ve la pantalla
//y en la segunda se muestran los errores al enviar o al tocar
//{props.meta.error && <Text> {props.meta.error} </Text> }
//{props.meta.touched && props.meta.error && <Text> {props.meta.error} </Text> }

const validate = (value) => {
    const errors = {}
    if(!value.name){
        errors.name = 'Required'
    }else if(value.name.length < 5){
        errors.name = 'Must be at least 5 characters'
    }else if(value.name.length > 10){
        errors.name = 'Must be less than 10 characters'
    }

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

    if(!value.confirm_password){
        errors.confirm_password = 'Required'
    }else if(value.password !== value.confirm_password){
        errors.confirm_password = 'The passwords do not match'
    }

    return errors
}

const SignUpForm = (props) => {
    return (
        <View>
            <Field name="name" component={fieldName} ph="Name" />
            <Field name="email" component={fieldName} ph="email@email.com" />
            <Field name="password" component={fieldName} ph="******" />
            <Field name="confirm_password" component={fieldName} ph="******" />
            <Button 
                title="register"
                onPress={props.handleSubmit(props.registro)}
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

export default reduxForm({ form: 'SignUpForm', validate })(SignUpForm)