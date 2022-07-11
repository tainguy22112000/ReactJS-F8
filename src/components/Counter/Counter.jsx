import React, { useEffect, useState } from 'react'
import './Counter.sass'

const Counter = () => {
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        const timerId  = setInterval(() => {
            setCountdown(prevCount => prevCount - 1);
            console.log('Count down ...')
        }, 1000);

        return () => clearInterval(timerId);
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Counter