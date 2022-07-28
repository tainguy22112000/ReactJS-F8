import React, {useEffect, useState, useReducer, useRef} from 'react'
import { setJob, addJob, deleteJob } from './action';
import reducer, {initState} from './reducer';
import logger from './logger'

const Todo = () => {
    const inputRef = useRef();
    const [state, dispatch] = useReducer(logger(reducer), initState);
    const {job, jobs} = state

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));

        inputRef.current.focus()
    }
    return (
        <div style = {{padding: '0 20px'}}>
            <h3>To do list</h3>

            <input 
                type="text"
                ref = {inputRef} 
                value = {job}
                placeholder = "Enter to do task ..."
                onChange = {(e) => dispatch(setJob(e.target.value))}
            />
            <button onClick = {handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>{job}
                        <span 
                            style = {{cursor: "pointer"}}
                            onClick = {() => dispatch(deleteJob(index))}
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