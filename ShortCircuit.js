import React, { Component } from 'react'

class ShortCircuit extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    render() {
        return (
            
              this.state.isLoggedIn &&  <div>welcome Harika</div>
    
        )
    }
}

export default ShortCircuit
