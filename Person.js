import React from 'react'

function Person({person},{key}) {
    return (
        <div>
        {key} <h2>I am {person.name} Iam {person.age} years old I know {person.skill}</h2>
        
        </div>
    )
}

export default Person
