import React, { Component } from 'react'

class UserGreeting1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
       let message
       if(this.state.isLoggedIn)
       {
           message = <div>welcome visitor</div>
       }
       else{
           message = <div>welcome harika</div>
       }
    return <div>{message}</div>
    }
}
export default UserGreeting1
