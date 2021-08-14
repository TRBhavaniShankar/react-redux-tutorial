import React from 'react'

function Count({text, count}) {
    return (
        <div>
            {text} is {count}
        </div>
    )
}

export default React.memo(Count)
