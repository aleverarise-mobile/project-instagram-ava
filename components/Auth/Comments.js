//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
class Comments extends Component {
    static navigationOptions = {
        tabBarVisible: false
    }
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <Text>Comments</Text>
                <Button 
                    title="Back"
                    onPress={ () => { navigation.goBack() }}
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
export default Comments;
