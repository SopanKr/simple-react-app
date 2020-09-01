import React, { Component } from 'react';
import './App.css';
import NavBar from './componets/navbar';
import Cart from './componets/cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ProductPage from './componets/productPage';
import ProductDetail from './componets/productDetail';
class App extends Component {

  state = {  
    items: []
}

handleIncrement = item => {
    const items = [...this.state.items];
    const index = items.indexOf(item);
    items[index] = {...item};
    items[index].qty++;
    this.setState({items})
}

handleDelete = itemId => {
    const items= this.state.items.filter(c => c.id !==itemId);
    this.setState({ items })
}

handleReset = () => {
    const items =  this.state.items.map(c => {
        c.qty = 0;
        return c;
    });
    this.setState({items})
}

handleAddToCart = item => {
  item.qty = 1;
  const items = [...this.state.items] 
  items.push(item)
  this.setState({items});
} 

  render() {
    return (
      <Router>
      <NavBar totlaCounters={this.state.items.filter(c => c.qty > 0 ).length} />
      <main className="container">
        <Switch>
        <Route exact path="/" render={(props) => <ProductPage />} />
        <Route exact path="/product/:id" render={(props) => {
          const id = props.match.params.id;
          return <ProductDetail  id={id} onAddToCart={this.handleAddToCart} />}} />
        <Route exact path="/cart" render={(props) => <Cart onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} items={this.state.items}/>} />
        </Switch>
        
      </main>
      </Router>
      );
  }
}

export default App;
