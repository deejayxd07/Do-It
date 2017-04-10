import React, { Component } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import CheckBox from 'react-native-check-box';

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
					style={{flex: 1, padding: 10}}
					isChecked={todo.completed}
					checked={todo.completed}
					leftText={todo.text}
					onClick={() => actions.completeTodo(todo.id)}
				/>

			</View>
		)
	}
}