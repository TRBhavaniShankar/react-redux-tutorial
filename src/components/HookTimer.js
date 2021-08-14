import React, {useState, useEffect} from 'react'

function HookTimer() {

    const [timer, settimer] = useState(0)

    useEffect(() => {

        // create timer
        const interval = setInterval(() => {
            settimer(prevTimer => prevTimer + 1)
        }, 1000);

        // unmount
        return () => {
            clearInterval(interval)
        }

    }, [])

    return (
        <div>
            Count - {timer}
        </div>
    )
}

export default HookTimer
