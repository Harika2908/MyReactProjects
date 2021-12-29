import React, { Component } from 'react'

class Form extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             userName : '',
             comments : "",
             topic : "React"
        }
    }
    handleUserName = (event) => {
        this.setState({
            userName : event.target.value
        })
    }
    handleCommentsChange = event =>{
           this.setState({
               comments : event.target.value
           })
    }
    handleOptionsChange = event =>{
        this.setState({
            topic : event.target.value
        })
    }
    handleSubmit = event =>{
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    
    render() {
      const  {userName, comments ,topic} =  this.state
        return (
            <form onSubmit = {this.handleSubmit} >
            <div>
               <label>Username</label> 
               <input type = "text" value = {userName} onChange = {this.handleUserName} />
            </div>
            <div>
                <label>Comments</label>
                <textarea type = "text" value = {comments} onChange = {this.handleCommentsChange}/>
            </div>
            <div>
                <label>topic</label>
                <select value = {topic} onChange = {this.handleOptionsChange}>
                    <option value = "React">React</option>
                    <option value = "java">java</option>
                    <option value = "python">python</option>
                </select>
            </div>
            <div>
                <button>submit</button>
            </div>
            </form>
        )
    }
}

export default Form
