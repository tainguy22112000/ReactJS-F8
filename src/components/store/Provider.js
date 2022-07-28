import Context from "./Context";
import {useReducer} from 'react'
import reducer from "./reducer";
import {initState} from './reducer'
import logger from "../Todo/logger";

function Provider({children}) {
    const [state, dispatch] = useReducer(logger(reducer), initState) 

    return (
        <Context.Provider value = {[state, dispatch]}>
            {children}
        </Context.Provider>    
    )
}

export default Provider