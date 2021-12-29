import React from 'react'

function Inline() {
    const Heading =
    {
          fontSize : "200px", // camelcase : should be a string
          color : "Blue"
    }
    return (
        <div>
           <h1 style = {Heading}>Inline</h1> 
        </div>
    )
}

export default Inline
