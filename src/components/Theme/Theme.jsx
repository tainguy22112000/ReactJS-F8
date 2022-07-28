<<<<<<< HEAD
import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

const Theme = () => {
    return (
        <Paragraph />
=======
import { Button } from '@mantine/core'
import React, {useState} from 'react'
import Paragraph from './Paragraph'

const Theme = () => {
    const [theme, setTheme] = useState('dark')

    return (
        <>
            <Button
                size ="xl"
                onClick={() => setTheme(theme ? 'light' : 'dark')}
            >
                Change Color Theme
            </Button>
            <Paragraph theme = {theme}/>
        </>

>>>>>>> 0ad6aa680de9f4b9aa7222a0e4d9c520fa2b0da7
    )
}

export default Theme