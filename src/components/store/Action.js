import { SET_TODO_INPUT} from './Constant'
import { ADD_TODO_INPUT } from './Constant'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodoInput = payload => ({
    type: ADD_TODO_INPUT,
    payload
})