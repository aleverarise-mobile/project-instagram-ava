//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Publication extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text>Publication</Text>
                <Button 
                    title="Back"
                    onPress={ () => { navigation.goBack() }}
                />
                <Button 
                    title="Comments"
                    onPress={ () => { navigation.navigate('Comments') }}
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
        alignItems: 'center',
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Publication;
