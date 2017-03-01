import { ADD_TODO, DELETE_TODO, COMPLETE_TODO } from '../constants';
const initialState = [
  {
    text: 'Apply Redux',
    completed: false,
    id: 0
  },
  {
    text: 'Develop Awesome Apps',
    completed: false,
    id: 1
  },
]


export default function (state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			return [
				{
					id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
					completed: false,
					text: action.text
				},
					...state
			]

		case DELETE_TODO:
			return state.filter(todo => 
				todo.id !== action.id
			)

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ?
          { ...todo, completed: !todo.completed } :
          todo
      )

		default:
			return state;

	}
}
