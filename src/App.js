import React from 'react';
import './App.css';
import data from './data.json';
import Products from './components/Products';
import Filter from './components/Filter';

class App extends React.Component{
  constructor(){
    super();
    this.state={
      original: data.products,
      products_to_display: data.products,
      size:"",
      sort:""
    }
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

            console.log(x)

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
        <Products data={this.state.products_to_display} />
      </div>
    );
  }
}

export default App;
