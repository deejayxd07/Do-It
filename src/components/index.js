import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ToastAndroid,
  Keyboard
} from 'react-native';
import TodoItem from './TodoItem';

export default class Index extends Component {
	state = {
		text: ''
	}

	handleButtonPress = (e) => {

		if (this.state.text.length > 0) {
			this.props.actions.addTodo(this.state.text);
			this.setState({
				text: ''
			});
			Keyboard.dismiss();
		} else {
			ToastAndroid.show('Put something on the input field.', ToastAndroid.SHORT);
		}
	}
	render() {
		const { todos } = this.props;
		return (
			<View style={{flex: 1, flexDirection: 'column', backgroundColor: '#fff'}}>
				<View 
					style={{
						flex: 0.15,
						flexDirection: 'row',
					  backgroundColor: '#FCFCFF',
					  borderBottomColor: '#EBF1F6',
					  borderBottomWidth: 1
					}}
				>
					<View 
						style={{flex: 1, flexDirection: 'row', padding: 20}}
					>
						<Text style={{flex: 0.7, color: '#666AFB', fontSize: 20}}>Do It!</Text>
						<Text style={{flex: 0.3, color: '#B8B9D4'}}>12 Tasks</Text>
					</View>
				</View>

				<View style={{flex: 0.8, paddingTop: 10}}>
					{todos.map(todo => 
						<TodoItem todo={todo} key={todo.id} />
					)}	
				</View>
			</View>
		)
	}
}