import React, {Component} from 'react';

export default class CoordinatesButton extends Component{
    
   buttonHandler=(event)=>{
       

     this.props.onReceiveCoordinates([event.clientX, event.clientY])
  
  

     }
    
    render(){
        return(
            <button onClick={this.buttonHandler} >
                        PUSH ME!
            </button>
        )
    }
}
import React, {Component} from 'react';

export default class DelayedButton extends Component{
    buttonHandler=(event)=>{
        this.props.onDelayClick(event)
       const timeOut = setTimeout(this.props.delay)
    }
    
    
    render(){
        return(
<button onClick={this.buttonHandler}>
Delayer
</button>
        )
    }
}

