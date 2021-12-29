import React from 'react'
import Person from './Person'
function ListRendering2() {
    const Persons =[
    {
        id : 1,
        name : "harika",
        age  : 24,
        skill : 'react'
    },
    {
        id : 2,
        name : "priya",
        age  : 25,
        skill : 'Java'
    },
    {
        id : 3,
        name : "Yamika",
        age  : 26,
        skill : 'Python'
    }
    ]
const PersonList = Persons.map(person =><Person key = {person.id} person = {person} />)
return (
        <div>
         {PersonList}
        </div>
)
}



export default ListRendering2
