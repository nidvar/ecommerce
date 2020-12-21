import React from 'react';

class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            display_checkout: false,
            email:null,
            name:null,
            address:null
        }
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault()
        const customer_order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address
        }
        this.props.grab_form_data(customer_order)
    }
    total_value = ()=>{
        let total_value = 0;
        this.props.data.forEach(a=>{
            let x = a.price*a.count.toFixed(2)
            total_value = total_value + x
        })
        return(
            <div className='total_value'>
                <label>{total_value.toFixed(2)} </label>
                <button onClick={()=>{this.setState({display_checkout:true})}}>PROCEED</button>
            </div>
        )
    }
    checkout = ()=>{
        return(
            <div className='Form_div'>
                <form className='My_form' onSubmit={this.handleSubmit}>
                    <p><label>Email </label></p>
                    <p><input type='Email' name='email' onChange={this.handleChange}/></p>
                    
                    <p><label>Name </label></p>
                    <p><input type='text' name='name' onChange={this.handleChange}/></p>
                    
                    <p><label>Address </label></p>
                    <p><input type='text' name='address' onChange={this.handleChange}/></p>

                    <button type='submit'>CHECKOUT</button>
                </form>
            </div>
        )
    }
    render(){
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
                {this.total_value()}
                {this.state.display_checkout==true?this.checkout():null}
            </div>
        )
    }
}

export default Cart