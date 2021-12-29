import React, { Component } from 'react'

class Count5 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
    }
    increment()
    {
        // this.setState({
        //     count : this.state.count +  1
        //      } )
        //     console.log(this.state.count)
        this.setState(prevState => ({
             count : prevState.count + 1
        }))
        console.log(this.state.count)
    }
    increment5()
    {
       this.increment() 
       this.increment()
       this.increment()
       this.increment()
       this.increment()
    }
    render() {
        return (
            <div>
                count = {this.state.count}
                <button onClick = {()=> this.increment5()}>Increment5</button>
            </div>
        )
    }
}

export default Count5
