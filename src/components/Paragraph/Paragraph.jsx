import { ThemeContext } from '../provider/ThemeContext'
import { useContext } from 'react'
import React from 'react'
import './Paragraph.sass'

// Context
// CompA => CompB => CompC
// 1. Create context
// 2. Provider
// 3. Consumer


const Paragraph = () => {
    const context = useContext(ThemeContext)
    
    return (
        <p className = {context.theme}>
            Context provide a way to pass data through the component tree
            without having to pass props down manually at every level
        </p>
    )
}

export default Paragraph