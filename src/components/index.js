import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  ToastAndroid,
	TouchableHighlight,
  Keyboard,
	Text,
} from 'react-native';

import { Fab, Icon } from 'native-base';
import TodoItem from './TodoItem';
import CreateTodo from './CreateTodo';

const SHOW_ALL = 'All Tasks';
const SHOW_UNFINISHED = 'Unfinished Tasks';
const SHOW_COMPLETED = 'Finished Tasks';
const themeColor = '#FF8147';

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_UNFINISHED]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class Index extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
			filter: SHOW_UNFINISHED,
			openModal: false

	  };

	  this.openModalHandler = this.openModalHandler.bind(this)
	}

  openModalHandler(openModal) {
		this.setState({
			openModal: openModal
		});
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
						<Text style={{color: themeColor, fontSize: 20}}>DO IT!</Text>
						<Text
							style={{
								color: themeColor,
								paddingTop: 10,
								fontSize: 16
							}}
						>{uncompletedTasks} Unfinished Tasks</Text>
					</View>
				</View>

				<ScrollView style={{flex: 0.8, paddingTop: 10}}>
					<View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 10}}>
						<Text style={{color: themeColor}}>{this.state.filter}</Text>
					</View>
					{todoList}
				</ScrollView>

        <Fab
          style={{ backgroundColor: themeColor, bottom: 20, zIndex: 1 }}
          position="bottomRight"
          onPress={() => this.setState({openModal: true})}
        >
          <Icon name="add" />
        </Fab>

        <CreateTodo
	        actions={actions}
        	openModalHandler={this.openModalHandler}
	        openModal={this.state.openModal} />

				<View style={{flex: 0.12, flexDirection: 'row', justifyContent: 'space-between', backgroundColor: themeColor}}>
					<TouchableHighlight style={{padding: 23, paddingTop: 21}} onPress={() => this.setState({filter: SHOW_UNFINISHED})}>
						<Text style={{color: '#fff', fontSize: 13}}>Unfinished</Text>
					</TouchableHighlight>


					<TouchableHighlight style={{padding: 23, paddingTop: 21}} onPress={() => this.setState({filter: SHOW_ALL})}>
						<Text style={{color: '#fff', fontSize: 13}}>All</Text>
					</TouchableHighlight>


					<TouchableHighlight style={{padding: 23, paddingTop: 21}} onPress={() => this.setState({filter: SHOW_COMPLETED})}>
						<Text style={{color: '#fff', fontSize: 13}}>Finished</Text>
					</TouchableHighlight>
				</View>
			</View>
		)
	}
}
