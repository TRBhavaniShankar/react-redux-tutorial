import React, {useState, useMemo} from 'react'

function CounterUseMemo() {
    
    const [counter1, setcounter1] = useState(0)
    const [counter2, setcounter2] = useState(0)

    const increment1 = () => {
        setcounter1(counter1 + 1)
    }
    

    const increment2 = () => {
        setcounter2(counter2 + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while (i < 2000000000) i ++

        return counter1 % 2 === 0
    }, [counter1])

    return (
        <div>
            <div>
                <button onClick={increment1}>Counter 1 - {counter1}</button>    
                <span>{isEven ? 'Even' : 'Odd' }</span>
            </div>
            <div>
                <button onClick={increment2}>Counter 2 - {counter2}</button>    
            </div>
        </div>
    )
}

export default CounterUseMemo
