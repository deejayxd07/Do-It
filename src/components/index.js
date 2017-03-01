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
			<View style={{flex: 1, flexDirection: 'column'}}>
				<View style={{flexDirection: 'row'}}>
					<TextInput 
						style={{height: 40, flex: 0.7}}
		        onChangeText={(text) => this.setState({text})}
		        value={this.state.text}
		        onKeyDown={() => this.handleKeyDown}
		      />

		      <View style={{flex: 0.3}}>
						<Button
						  onPress={() => this.handleButtonPress()}
						  title="Add"
						  color="#841584"
						/>
					</View>
				</View>

				<View style={{flex: 1}}>
					{todos.map(todo => 
						<TodoItem todo={todo} key={todo.id} />
					)}	
				</View>
			</View>
		)
	}
}