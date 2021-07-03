// Code DelayedButton Component Here
import React, {Component} from 'react';

export default class DelayedButton extends Component{
    buttonHandler=(event)=>{
        event.persist()
        this.props.onDelayedClick(event)
   
    }
    
    
    render(){
        return(
            <button onClick={this.buttonHandler}>
Delayer
</button>
        )
    }   
}