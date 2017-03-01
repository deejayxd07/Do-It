import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import TodoItem from './TodoItem';

export default class Index extends Component {
	render() {
		const { todos } = this.props;
		return (
			<View>
				{todos.map(todo => 
					<TodoItem todo={todo} key={todo.id} />
				)}	
			</View>
		)
	}
}