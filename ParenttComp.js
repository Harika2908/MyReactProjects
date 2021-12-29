import React, { Component } from 'react'
import MemoComp from './MemoComp'
// import PureComp from './PureComp'
// import RegComp from './RegComp'
class ParenttComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'harika'
        }
    }
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name : "Harika"
            })
        } , 2000)
    }
    render() {
        console.log("*******************ParentComponentRender********************")
        return (
            <div>
                Parent Component
                {/* <RegComp name = {this.state.name}></RegComp> */}
                {/* <PureComp name = {this.state.name}></PureComp> */}
                <MemoComp name = {this.state.name}/>
            </div>
        )
    }
}

export default ParenttComp
