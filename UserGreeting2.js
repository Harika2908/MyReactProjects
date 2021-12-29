import React, { Component } from 'react'

export class UserGreeting2 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : true
        }
    }
    

    render() {
        return (

    this.state.isLoggedIn ? (<div>Welcome Visitor</div>) : (<div>Welcome Harika</div>)
            
        )
    }
}

export default UserGreeting2
