import React from 'react'

function ListRendering1() {
    const Names = ["Harika","Priya","Yamika"]
    return (
        <div>
        {Names.map(name  => <h2>{name}</h2>)}
        </div>
    )
          }     
          

export default ListRendering1
