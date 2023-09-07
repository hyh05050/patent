import React, { Component } from 'react'

class Quantity extends Component{
    state= {
     qty:2
    }

    increment = () => {
       this.setState({
           qty: this.state.qty+1
       })
    }

    decrement = () => {
        this.setState({
            qty: this.state.qty-1
        })
    }



    render(){
        return(
            <div className="handle-counter" id="handleCounter">
                <input type="text" value={this.state.qty} onChange={() => console.log()} />
                <div className="lft-cntrs">
                    <div onClick={this.increment} className="counter-plus btn"><i className="fa fa-caret-up"></i></div>
                    <div onClick={this.decrement} className="counter-minus btn"><i className="fa fa-caret-down"></i></div>
                </div>
            </div>
        )
    }
    
}
export default  Quantity;