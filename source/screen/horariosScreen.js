import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

class HorariosScreen extends Component {

	static navigationOptions = {
		tabBarLabel:'Horários',
		tabBarIcon:({focused, tintColor}) => {
			if(focused) {
				return (
					<Image source={require('../assets/horario_azul.png')} style={styles.icone} />
				);			
			} else {
				return (
					<Image source={require('../assets/horario_preto.png')} style={styles.icone} />
				);
			}
		}
	};
	
	render(){
		return(
			<View>
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

export default HorariosScreen;