import ReactDOM from 'react-dom'
import React from 'react'

export default class Hello extends React.Component{
    constructor(...args){
        super(...args);
        this.state={
            number:0
        }
    }

    render(){
        return <p>{this.state.number} 个人 ，你们好！</p>
    }
}