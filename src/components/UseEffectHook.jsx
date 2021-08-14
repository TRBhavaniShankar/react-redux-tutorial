import React, {useState, useEffect} from 'react'

function UseEffectHook() {

    const initialState = 0
    const [count, setCount] = useState(initialState)
    const [name, setName] = useState("")

    useEffect(() => {
        console.log("called")
        document.title = `You clicked ${count} times`
    }, [count])

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={() => setCount(count + 1)}> Count {count} </button>
        </div>
    )
}

export default UseEffectHook
