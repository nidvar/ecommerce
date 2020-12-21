import React from 'react';

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            display_checkout: false
        }
    }
    total = ()=>{
        let total_value = 0;
        this.props.data.forEach(a=>{
            let x = a.price*a.count.toFixed(2)
            total_value = total_value + x
        })
        return(
            <div className='total_value'>
                <label>{total_value.toFixed(2)} </label>
                <button onClick={()=>{this.setState({display_checkout:true})}} >CHECKOUT</button>
            </div>
        )
    }
    checkout = ()=>{
        return(
            <div className='Form_div'>
                <form className='My_form'>
                    <p><label>Email </label></p>
                    <p><input type='Email' name='Email' onChange={(e)=>{this.props.grab_form_data(e.target.value)}} /></p>
                    
                    <p><label>Name </label></p>
                    <p><input type='text' name='Name' onChange={(e)=>{this.props.grab_form_data(e.target.value)}} /></p>
                    
                    <p><label>Address </label></p>
                    <p><input type='text' name='Address' onChange={(e)=>{this.props.grab_form_data(e.target.value)}} /></p>
                    <button>PROCEED</button>
                </form>
            </div>
        )
    }
    render(){
        const x = this.props.data
        console.log(x)
        const display = this.props.data.map(item=>{
            return (
                <div key={Math.random()} className="cart">
                    <p>{item.title}</p>
                    <img src={item.image} className="cartimg"/>
                    <p>{item.count}x ${item.price}</p>
                    <button onClick={()=>{this.props.removeItems(item)}}>REMOVE</button>
                </div>
            )
        })
        return(
            <div>
                <h1>Cart</h1>
                {display}
                {this.total()}
                {this.state.display_checkout==true?this.checkout():null}
            </div>
        )
    }
}

export default Cart