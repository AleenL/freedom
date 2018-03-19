import React from 'react';

export default class Red extends React.Component{
    constructor(...args){
        super(...args)
    }

    render(){
        return(
            <div className='redPage' style={{background:'red'}}>
                hello
            </div>
        )
    }
}