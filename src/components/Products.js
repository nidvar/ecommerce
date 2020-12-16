import React from 'react';

class Products extends React.Component{
    render(){
        const display_products = this.props.data.map(product=>{
            return (
                <div key={product._id} className="Products" >
                    <img src={product.image} />
                    <h3>{product.title}</h3>   
                    <p>{product.description}</p>
                    <div className="Buying">
                        <p>${product.price}</p>
                        <div><button>ADD TO CART</button></div>
                    </div>           
                </div>
            )
        })
        return(
            <div>
                <h1>Products</h1>
                <div className="Product-container">
                    {display_products}
                </div>      
            </div>
        )
    }
}

export default Products