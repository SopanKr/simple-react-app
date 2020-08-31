import React, { Component } from 'react';
import './App.css';
import NavBar from './componets/navbar';
import Cart from './componets/cart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

class App extends Component {

  state = {  
    items: [
        {id:1, value: 4},
        {id:2, value: 0},
        {id:3, value: 0},
        {id:4, value: 0},
    ]
}

handleIncrement = item => {
  console.log("nfjjknjkfbn", item);
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


  render() {
    return (
      <Router>
      <NavBar totlaCounters={this.state.items.filter(c => c.value > 0 ).length} />
      <main className="container">
        <Switch>

        <Route exact path="/cart" render={(props) => <Cart onReset={this.handleReset} onIncrement={this.handleIncrement} onDelete={this.handleDelete} items={this.state.items}/>} />
        </Switch>
        
      </main>
      </Router>
      );
  }
}

export default App;
