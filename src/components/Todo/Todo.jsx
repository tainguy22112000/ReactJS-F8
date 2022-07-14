import React, {useReducer} from 'react'
import { useRef } from 'react';

// INITIAL 
const initState = {
    job: '',
    jobs: []
}


// ACTION
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DEL_JOB = 'delete_job';
const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DEL_JOB,
        payload
    }
}


// REDUCER
const reducer = (state, action) => {
    const {type, payload} = action
    console.log(action)
    switch(type) {
        case SET_JOB:
            return {
                ...state,
                job: payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, payload]
            }
        case DEL_JOB:
            const newJobs = [...state.jobs]
            newJobs.splice(payload, 1)
            console.log(newJobs)
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action. ')
    }

}

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initState);
    const {job, jobs} = state;
    const inputRef = useRef()

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }

    return (
        <div style = {{padding: '0 20px'}}>
            <h3>To Do List</h3>
            <input 
                ref = {inputRef}
                value = {job}
                type= "text"
                placeholder='Enter todo task ...' 
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick = {handleSubmit}>Add</button>
            <ul>
              {jobs.map((job, index) => (
                <li key ={index}>
                    {job} 
                    <span 
                        onClick={() => dispatch(deleteJob(index))}
                        style = {{cursor: "pointer"}}
                    >
                            &times;
                    </span>
                </li>
              ))}
            </ul>
        </div>
    )
}

export default Todo