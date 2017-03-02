import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { CheckBox } from 'native-base';

export default class TodoItem extends Component {
	state = {
		checked: false
	}

	render() {
		const { todo } = this.props;
		return (
			<View 
				style={{
					flexDirection: 'row', 
					padding: 15, 
					borderBottomWidth: 1, 
					borderBottomColor: '#f2f3f4'
				}}
			>
				<CheckBox 
					checked={this.state.checked} 
				/>
				<Text 
					style={{fontSize: 15, paddingLeft: 25}}
					onPress={() => this.setState({checked: !this.state.checked})}
				>{todo.text}</Text>
			</View>
		)
	}
}