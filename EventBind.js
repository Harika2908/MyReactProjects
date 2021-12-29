import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "hello harika"
             
        }
        this.ClickHandler = this.ClickHandler.bind(this)
    }
        // ClickHandler()
        // {
        //     this.setState(
        //         {
        //             message : "goodbye..!"
        //         })
        //    console.log(this)     
        //        }
        ClickHandler = () => {
            this.setState({
            message : "Goodbye...!"
        })}
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick =  {this.ClickHandler.bind(this)}>click</button> */}
                {/* <button onClick ={ () => this.ClickHandler()}>click</button> */}
                <button onClick =  {this.ClickHandler}>click</button>
            </div>
        )
    }
}

export default EventBind
