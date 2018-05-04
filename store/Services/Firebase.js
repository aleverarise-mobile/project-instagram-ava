import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCRE9CFnx8RcggIdnRPkfO8hAA7w2dAL8M",
    authDomain: "project-instagram-ava.firebaseapp.com",
    databaseURL: "https://project-instagram-ava.firebaseio.com",
    projectId: "project-instagram-ava",
    storageBucket: "project-instagram-ava.appspot.com",
    messagingSenderId: "4015538282"
};
firebase.initializeApp(config);

export const Auth = firebase.auth()