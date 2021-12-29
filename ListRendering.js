import React from 'react'

function ListRendering() {
    const Names = ["Harika","Priya","Yamika"]
    return (
        <div>
            <h2>{Names[0]}</h2>
            <h2>{Names[1]}</h2>
            <h2>{Names[2]}</h2>
        </div>
    )
}

export default ListRendering
