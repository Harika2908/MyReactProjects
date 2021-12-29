import React from 'react'
import './myStyle.css'

function ConditStyling(props) {
    let ClassName =  props.Primary ? "Primary" : ''
    return (
        <div>
            <h1 className = {`${ClassName} font`} >Harika has a clear mind</h1>
            <h1></h1>
        </div>
    )
}

export default ConditStyling
