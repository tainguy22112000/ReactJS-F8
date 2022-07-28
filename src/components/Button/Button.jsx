import React from 'react'
import './Button.sass'

const Button = ({title, href, onClick, isPrimaryColor}) => {
    
    return (
        <>
            <button onClick = {onClick} className = 'btn btn__header' style = {{"backgroundColor": `${isPrimaryColor}`}}>
                <a>{/* <a href = {href} target = 'blank'> */}
                    {title}
                </a>
            </button>

            <h2>Button</h2>
        </>
        
        
        
    )
};

export default Button