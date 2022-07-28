import React from 'react'
import {useState, useEffect, useRef} from 'react'


let timerId;
const Timer = () => {
    
    const [timer, setTimer] = useState(60);
    
    let timerId = useRef()
    

    const handledStart = () => {
        timerId.current = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1)
        }, 1000)

        console.log('Start -> ', timerId.current)
    }

    const handledStop = () => {
        clearInterval(timerId.current)
        console.log('Stop -> ', timerId.current)
    }
  
    return (
        <div style = {{padding: 20}}>
            <h1>{timer}</h1>
            <button onClick={handledStart}>START</button>
            <button onClick={handledStop}>STOP</button>
        </div>
  )
}

export default Timer