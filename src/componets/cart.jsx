import React, { Component } from 'react';
import CartProduct from './cartProduct';

class Cart extends Component {
   
    render() { 
        return (<div>
            <button className="btn btn-secondary btn-sm" onClick={this.props.onReset}>Reset</button>
            {this.props.items.map(item => <CartProduct key={item.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} item={item}/>)}
        </div>  );
    }
}
 
export default Cart;