import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
       if(this.state.isLoggedIn)   
       {
           return <div>Welcome Harika</div>
       } 
       else{
           return <div>Welcome Visitor</div>
       }
    
    }
}
export default UserGreeting
