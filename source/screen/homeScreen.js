import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeList from '../components/homeList';
import HomeProducts from '../components/homeProducts';

const Navegador = createStackNavigator({
	HomeList:{
		screen:HomeList
	},
	HomeProducts:{
		screen:HomeProducts
	}
});

export default Navegador;



























// import React, { Component } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';
// import { TabNavigator } from 'react-navigation';

// class HomeScreen extends Component {

// 	static navigationOptions = {
// 		tabBarLabel:'home',
// 		tabBarIcon:({focused, tintColor}) => {
// 			if(focused) {
// 				return(
// 					<Image source={required('../assets/contato_azul.png')} style={styles.icone} />
// 				);			
// 			} else {
// 				return (
// 					<Image source={required('../assets/contato_preto.png')} style={styles.icone} />
// 				);
// 			}
// 		}
// 	};
	
// 	render(){
// 		return(
// 			<View>
// 				<Text> </Text>
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	icon:{
// 		width:26,
// 		height:26
// 	},
// })

// export default HomeScreen;
