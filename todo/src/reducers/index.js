import { ADD_TODO, TOGGLE_TODO } from '../actions';


const initialState = {
    todos: [
      {task: 'Add your First Todo!', completed: false, id: 10000001 }  
    ]
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [
                ...state.todos,
                {task: action.payload, completed: false, id:Date.now() }    
                ]
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.payload)
                    return {
                       ...todo, completed: !state.completed 
                        }
                    return todo;
                })
            }

        default:
            return state;

    }   
}