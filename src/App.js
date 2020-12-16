import React from 'react';
import './App.css';
import data from './data.json';
import Products from './components/Products'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      products: data.products,
      size:"",
      sort:""
    }
  }
  render(){
    return (
      <div className="App">
        <Products data={this.state.products} />
      </div>
    );
  }
}

export default App;
