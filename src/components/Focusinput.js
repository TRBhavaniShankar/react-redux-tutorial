import React, {useEffect, useRef} from 'react'

function Focusinput() {

    const inputRef = useRef(null)

    // we need to mimik the componentDidMount feture as we need this only once
    useEffect(() => {
        
        // current - react will set the refs current property to the dom node
        inputRef.current.focus()
        return () => {
            
        }
    }, [])

    return (
        <div>
            <input ref={inputRef} type='text' />
        </div>
    )
}

export default Focusinput
