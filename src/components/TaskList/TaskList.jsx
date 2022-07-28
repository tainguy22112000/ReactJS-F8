import React from 'react'
import { useStore, actions } from '../../store'
import {Input, Button, Badge, Title, List, ThemeIcon} from '@mantine/core'
import { CircleCheck, CircleDashed } from 'tabler-icons-react'

const TaskList = () => {
    const [state, dispatch] = useStore();
    const {todos, todoInput} = state;
    
    const handleSubmit = () => {
        dispatch(actions.addTodoInput(todoInput))
    }

    console.log(todos)

    return (
        <>
            <div style = {{padding: 10, margin: 20, display: 'flex', justifyContent: 'center'}}>
                <Input
                    style = {{input: {width: '60%', boxSizing: 'border-box'}, width: '60%', display: 'incline-block', paddingRight: 10}}
                    variant = "default"
                    placeholder='Add your new task ...'
                    radius = "xs"
                    required
                    size = "sm"
                    value = {todoInput}
                    onChange = {e => {
                        dispatch(actions.setTodoInput(e.target.value))
                    }}
                />
                <Button
                    onClick={handleSubmit}
                >
                    Add new task
                </Button>
            </div>

                <Title align='center'>
                Task List Today
                </Title>

                {todos.map((todo, index) => (
                    <List
                        key = {index}
                        spacing = "xs"
                        icon = {
                            <ThemeIcon color= "teal" size = "24" radius = "xl">
                                <CircleCheck size = {16}/>
                            </ThemeIcon>
                        }
                    >
                        <List.Item>{todo}</List.Item>
                    </List>
                ))}
        </>
       
    )
}

export default TaskList