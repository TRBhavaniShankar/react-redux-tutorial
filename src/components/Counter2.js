import React, {useReducer} from 'react'

const initialState = {
    firstCounter: 0
}
const reducer = (currentState, action) => {

    switch (action.type) {
        case 'increment':
            return {firstCounter: currentState.firstCounter + action.value}

        case 'decrement':
            return {firstCounter: currentState.firstCounter - action.value }

        case 'reset':
            return initialState
    
        default:
            return currentState
    }

}

function Counter2() {

    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>{count.firstCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    )
}

export default Counter2
