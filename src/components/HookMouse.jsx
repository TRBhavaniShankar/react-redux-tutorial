import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log("called log move")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        
        console.log("clicked mouse move")
        window.addEventListener('mousemove', logMousePosition)
        
        // component will unmount
        return () => {
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])
    // [] => call the useEfect only on inital render --> component did mount

    return (
        <div>
            x - {x} : y - {y}
        </div>
    )
}

export default HookMouse
