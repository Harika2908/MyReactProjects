import React from 'react'

// function Greet()
// {
//     return <h1>Hello world</h1>
// } 
const Greet = (props) => //props values will be passed from parent component <Greet />
{
 const {name,character} = props
    return(
        <div>
<h1>{name} also known as {character}</h1>
   
    </div>
    )
}
export default Greet