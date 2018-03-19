import {BrowserRouter,Router,HashRouter,Match,Route,Link,hashHistory,IndexLink} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './main'
import {Red} from './routus/home'


class SliderComponet extends React.Component{
    constructor(...args){
        super(...args)
    }

    render(){
        return(
            <div className='layout'>
                <Hello/>
                <div className="bottom">
                    <Link to='/index'>index</Link>
                    <Link to='/tap'>index</Link>
                </div>
                <div className={'rightContent'}>
                    { this.props.children }
                </div>
            </div>
        )
    }
}



ReactDOM.render(
    <HashRouter>
        <SliderComponent>
            <Route exact path='/' conponent={IndexComponent} />
            <Route path='/tap' conponent={Red} />
        </SliderComponent>
    </HashRouter>,
    document.getElementById('root')
);