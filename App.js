import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Guest } from './components/Guest/Guest'
import { Logged } from './components/Auth/Logged'
import { Provider } from 'react-redux'
import Store from './store/Store'

console.disableYellowBox = ['Remote debugger']

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Provider store={Store} >
					<Guest/>
				</Provider>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
});
