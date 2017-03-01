import React, { Component } from 'react';
import { Text } from 'react-native';

export default class TodoItem extends Component {
	render() {
		const { todo } = this.props;
		return (
			<Text style={{fontSize: 20}}>{todo.text}</Text>
		)
	}
}