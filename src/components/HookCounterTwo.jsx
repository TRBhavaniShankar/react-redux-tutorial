import React, {useState} from 'react'

function HookCounterTwo() {

    const initialVlaue = 0
    const [count, setCount] = useState(initialVlaue)

    const incrementBy5 = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialVlaue)} >Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)} >Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)} >Decrement</button>
            <button onClick={incrementBy5}>Increment By 5</button>
        </div>
    )
}

export default HookCounterTwo
