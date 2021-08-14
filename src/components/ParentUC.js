import React, {useState, useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentUC() {


    const [age, setage] = useState(25)
    const [salary, setsalary] = useState(50000)

    const handleAgeClick = useCallback(
        () => {
            setage(age + 1)
        },
        [age],
    )

    const handleSalaryClick = useCallback(
        () => {
            setsalary(salary+1000)
        },
        [salary],
    )

    return (
        <div>
            <Title />
            <Count text='Age' count={age} />
            <Button handleClick={handleAgeClick}>Increment Age</Button>
            <Count text='Salary' count={salary} />
            <Button handleClick={handleSalaryClick}>Increment Salary</Button>
        </div>
    )
}

export default ParentUC
