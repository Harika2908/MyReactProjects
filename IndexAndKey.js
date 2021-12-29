import React from 'react'

function IndexAndKey() {
    const names = ['harika','yamika','priya','harika']
    const nameList = names.map((name, index) => <h2 key = {index}> {index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default IndexAndKey
