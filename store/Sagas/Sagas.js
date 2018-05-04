import { takeEvery, call } from 'redux-saga/effects'
import { Auth } from '../Services/Firebase';

const loginFirebase = (value) => 
    Auth.createUserWithEmailAndPassword(value.email, value.password)
    .then( (success) => {
        console.log(success)
    })
    .catch( (error) => {
        var errorCode = error.code
        var errorMessage = error.message

        console.log(errorCode);
        console.log(errorMessage);
    })

function* generatorRegister(value){
    yield call (loginFirebase, value.payload)
    console.log(value)
}

export default function* functionPrimary(){
    yield takeEvery('REGISTRATION', generatorRegister)
    console.log('desde funcion generadora')
}
