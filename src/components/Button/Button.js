import React from 'react'
import './Button.sass'

const Button = ({title, href, onClick, isPrimaryColor}) => {
    return (
        <button onClick = {onClick} className = 'btn btn__header'>
            <a href = {href} target = 'blank'>
                {title}
            </a>
        </button>
    )
};

export default Button