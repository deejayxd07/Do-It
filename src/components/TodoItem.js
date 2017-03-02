import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { CheckBox } from 'native-base';

export default class TodoItem extends Component {
	render() {
		const { todo, actions } = this.props;
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
					checkboxTickColor='#FF8147'
					checked={todo.completed}
				/>
				<Text 
					style={{fontSize: 15, paddingLeft: 25}}
					onPress={() => actions.completeTodo(todo.id)}
				>{todo.text}</Text>
			</View>
		)
	}
}