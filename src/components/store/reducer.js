import { SET_TODO_INPUT } from "./Constant"

const initState = {
    todos: [],
    todoInput: '',
}

function reducer (state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: [...state.todos, action.payload]
            }

        default :
            throw new Error('This is invalid action')
        }
    }

export {initState}
export default reducer