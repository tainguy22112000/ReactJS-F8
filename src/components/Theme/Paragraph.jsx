import React from 'react'

const Paragraph = ({theme}) => {
    
    const colorTheme = (theme) => {
        const newColor = theme === 'dark' ? "red" : "blue"
        return newColor
    }

    return (
        <p style = {{backgroundColor: colorTheme(theme)}}>
            Context provides a way to pass data through the component tree without
            to pass props down manually at every level
        </p>
    )
}

export default Paragraph