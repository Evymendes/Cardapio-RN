import React, { Component } from 'react';
import { Text, StyleSheet, TouchableHighLight, Image } from 'react-native';

// import HomeList from './homeList'
// import HomeProducts from './homeProducts'

class Lista extends Component {

	static navigationOptions = {
		title:null,
		tabBarLabel:null,
	};
	constructor(props){
	super(props);
	this.state = {};
	this.clicou = this.clicou.bind(this);
	}

	clicou() {
		this.props.navigation.navigate('HomeProducts', {title:this.props.data.title, products:this.props.data.products});
	}

	render(){
		return(
			<TouchableHighLight underlanayColor="#FFF" onPress={this.clicou}>
				<View style={[styles.listaItem, {backgroundColor:this.props.data.bg}]}>
				<Image source={this.props.data.img} style={styles.listaImagem} />
					<View>
						<Text style={styles.listTitle}>{this.props.data.title}</Text>
						<Text style={styles.listDescription}>{this.props.data.description}</Text>
					</View>
				</View>
			</TouchableHighLight>
		);
	}
}

const styles = StyleSheet.create({
	listaItem:{
		height: 100,
		flex:1,
		flexDirection:'row',
		alignItems:'center'
	},
	listaImagem:{
		width:64,
		height:64,
		marginLeft:20,
		marginRight: 20
	},
	listTitle:{
		color: '#FFF',
		fontSize:25,
		fontWeight:'bold'
	},
	listDescription:{
		color:'#fff',
		fontSize: 16
// 	}
// })