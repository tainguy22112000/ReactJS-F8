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

    )
}

export default Theme