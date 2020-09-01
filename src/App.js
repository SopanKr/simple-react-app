import React, { Component } from 'react';
import './App.css';
import NavBar from './componets/navbar';
import Cart from './componets/cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductPage from './componets/productPage';
import axios from 'axios';

class App extends Component {

  state = {  
    items: [],
    products: []
}

handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = {...item};
    items[index].value++;
    this.setState({items})
}

handleDelete = itemId => {
    const items= this.state.items.filter(c => c.id !==itemId);
    this.setState({ items })
}

handleReset = () => {
    const items =  this.state.items.map(c => {
        c.value = 0;
        return c;
    });
    this.setState({items})
}

componentDidMount(){
  axios.post('http://localhost:3000/product/list', {filter: {}})
  .then(res =>  {
    let newData = res.data.list.map(item => item = {...item, value: 0})
    this.setState({products: newData})  
    console.log(newData)
  })
  .catch(json => console.log(json))
}


  render() {
    return (
      <Router>
      <NavBar totlaCounters={this.state.items.filter(c => c.value > 0 ).length} />
      <main className="container">
        <Switch>
        <Route exact path="/" render={(props) => <ProductPage products={this.state.products}/>} />
        <Route exact path="/cart" render={(props) => <Cart onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} items={this.state.items}/>} />
        </Switch>
        
      </main>
      </Router>
      );
  }
}

export default App;
