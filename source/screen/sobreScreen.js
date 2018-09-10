import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

class SobreScreen extends Component {

	static navigationOptions = {
		tabBarLabel:'Sobre',
		tabBarIcon:({focused, tintColor}) => {
			if(focused) {
				return(
					<Image source={require('../assets/sobre_azul.png')} style={styles.icone} />
				);			
			} else {
				return (
					<Image source={require('../assets/sobre_preto.png')} style={styles.icone} />
				);
			}
		}
	};
	
	render(){
		return(
			<View>
				<Text> </Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	icone:{
		width:20,
		height:20
	},
})

export default SobreScreen;