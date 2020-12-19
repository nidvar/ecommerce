import React from 'react';

class Cart extends React.Component{
    render(){
        const x = this.props.data
        console.log(x)
        const display = this.props.data.map(item=>{
            return (
                <div key={Math.random()} className="cart">
                    <p>{item.title}</p>
                    <img src={item.image} className="cartimg"/>
                    <p>{item.count}x ${item.price}</p>
                    <button onClick={()=>{this.props.removeItems(item)}} >REMOVE</button>
                </div>
            )
        })
        return(
            <div>
                <h1>Cart</h1>
                {display}
            </div>
        )
    }
}

export default Cart