import React from 'react';
import './App.css';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';
import Cart from './components/Cart';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      original: data.products,
      products_to_display: data.products,
      cartItems:JSON.parse(localStorage.getItem('cartItems'))!=null
              ?JSON.parse(localStorage.getItem('cartItems'))
              :[],
      size:"",
      sort:""
    }
  }
  removeItems=(e)=>{
    const x = this.state.cartItems
    const y = x.map(a=>{
      if(a._id == e._id){
        if(e.count >=1){
          e.count--
        }
      }
      return a
    })
    const new_array = y.filter(a=>{
      if(a.count!=0){
        return true
      }
    })
    this.setState({
      cartItems: new_array
    })
    localStorage.setItem('cartItems', JSON.stringify(new_array))
  }
  
  addToCart = (e)=>{
    const cart_items = this.state.cartItems;
    let already_picked = false;
    cart_items.forEach(items=>{
      if(items._id==e._id){
        console.log('match');
        items.count++
        already_picked = true
      }
    })
    if(already_picked == false){
      console.log('no match')
      cart_items.push({...e, count: 1})
    }
    
    this.setState({
      cartItems: cart_items
    })

    localStorage.setItem('cartItems', JSON.stringify(cart_items))
  }
  sortProducts=(e)=>{
    let x = this.state.products_to_display.sort((a,b)=>{
      if(e.target.value === 'lowest'){
        if(a.price < b.price){
          return -1
        }
      }
      if(e.target.value === 'highest'){
        if(a.price > b.price){
          return -1
        }
      }
      if(a._id > b._id){
        return -1
      }
    })
    this.setState({
      products_to_display:x,
      sort:e.target.value
    })
  }
  filterProducts=(e)=>{
    if(e.target.value === ''){
      this.setState({products_to_display: data.products, size:''})
    }else{
      this.setState({
        products_to_display: this.state.original.filter((a)=>{
          if(a.availableSizes.includes(e.target.value)){
            return true
          }
        }),
        size:e.target.value
      })
    }
  }
  render(){

    return (
      <div className="App">
        <Filter size={this.state.size} sort={this.state.sort} sortProducts={this.sortProducts} filterProducts={this.filterProducts} />
        <div className="product_cart">
          <Products data={this.state.products_to_display} add_to_cart={this.addToCart}/>
          <Cart data={this.state.cartItems} removeItems={this.removeItems} />
        </div>
      </div>
    );
  }
}

export default App;
