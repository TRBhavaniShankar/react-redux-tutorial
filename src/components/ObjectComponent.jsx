import React, {useState} from 'react'

function ObjectComponent() {

    const initialState = {firstName: "", secondName: ""}
    const [name, setName] = useState(initialState)

    return (
        <div>

            <input type="text" onChange={e => setName({ ...name, firstName: e.target.value})} value={name.firstName}/>
            <input type="text" onChange={e => setName({ ...name, secondName: e.target.value})} value={name.secondName}/>
            <h1>{name.firstName} - {name.secondName}</h1>
        </div>
    )
}

export default ObjectComponent
