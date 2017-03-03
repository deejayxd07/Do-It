import React, { Component } from 'react';
import Modal from 'react-native-simple-modal';
import { View, TextInput, Keyboard, ToastAndroid } from 'react-native';
import { Button, Text } from 'native-base';


export default class CreateTodo extends Component {
	state = {
		text: ''
	}

	handleButtonPress = (e) => {

		if (this.state.text.length > 0) {
			this.props.actions.addTodo(this.state.text);
			this.setState({
				text: ''
			});
			this.props.openModalHandler(false);
			Keyboard.dismiss();
		} else {
			ToastAndroid.show('Put something on the input field.', ToastAndroid.SHORT);
		}
	}

	render() {
		const { todo, openModal } = this.props;
		return (
			<Modal
		    open={openModal}
		    offset={100}
		    overlayBackground={'rgba(0, 0, 0, 0.75)'}
		    animationDuration={200}
		    animationTension={40}
		    modalDidOpen={() => undefined}
		    modalDidClose={() => this.props.openModalHandler(false)}
		    closeOnTouchOutside={true}
		    containerStyle={{
		       justifyContent: 'center'
		    }}
		    modalStyle={{
		      borderRadius: 2,
		      margin: 20,
		      padding: 20,
		      backgroundColor: '#F5F5F5',
		      bottom: 100,
		    }}>

		    <View>
         		<Text>Add new a task!</Text>
			      <TextInput
			        style={{height: 50}}
			        spellCheck={true}
			        onChangeText={(text) => this.setState({text})}
			        value={this.state.text}
			        autoFocus={true}
			      />
			      <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
				      <Button 
				      	onPress={() => this.handleButtonPress()}
					      style={{backgroundColor: '#FF8147'}}>
				      	<Text>Save</Text>
				      </Button>
			      </View>
		    </View>
			</Modal>
		)
	}
}