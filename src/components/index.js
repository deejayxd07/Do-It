import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  ToastAndroid,
  Text,
  Keyboard
} from 'react-native';
import { Fab, Icon, Button, Footer, FooterTab } from 'native-base';
import TodoItem from './TodoItem';

const SHOW_ALL = 'show_all';
const SHOW_UNFINISHED = 'show_unfinished';
const SHOW_COMPLETED = 'show_completed';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNFINISHED]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class Index extends Component {
	state = {
		text: '',
		filter: SHOW_UNFINISHED
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
		const { todos, actions } = this.props;
		let uncompletedTasks = 0;
		const todoList = [];

		const filteredTodos = todos.filter(TODO_FILTERS[this.state.filter]);

		for (var i = 0 ; i < filteredTodos.length; i++) {
			if (!filteredTodos[i].completed) { uncompletedTasks = uncompletedTasks + 1}

			todoList.push(<TodoItem todo={filteredTodos[i]} actions={actions} key={filteredTodos[i].id} />)
		}

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
						style={{flex: 1, flexDirection: 'row', padding: 20, justifyContent: 'space-between'}}
					>
						<Text style={{color: '#FF8147', fontSize: 20}}>Do It!</Text>
						<Text 
							style={{
								color: '#FF8147',
								paddingTop: 5,
								fontSize: 16
							}}
						>{uncompletedTasks} Unfinished Tasks</Text>
					</View>
				</View>

				<ScrollView style={{flex: 0.8, paddingTop: 10}}>
					{todoList}
				</ScrollView>


        <Fab
          style={{ backgroundColor: '#FF8147', bottom: 20 }}
          position="bottomRight"
        >
          <Icon name="add" />
        </Fab>

        <Footer>
	        <FooterTab style={{backgroundColor: '#FF8147'}}>
	          <Button
							onPress={() => this.setState({filter: SHOW_UNFINISHED})}
	          >
              <Text style={{color: '#fff'}}>Unfinished</Text>
	          </Button>
	          <Button
							onPress={() => this.setState({filter: SHOW_ALL})}
	          >
              <Text style={{color: '#fff'}}>All</Text>
	          </Button>
	          <Button 
	          	onPress={() => this.setState({filter: SHOW_COMPLETED})}
	          >
              <Text style={{color: '#fff'}}>Finished</Text>
	          </Button>
	        </FooterTab>
        </Footer>
			</View>
		)
	}
}