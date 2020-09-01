import React, { Component } from 'react';
import ProductComponent from './productComponent';

class ProductsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flex-container">
                {this.props.items.map(item => <ProductComponent key={item.id} item={item}/>)}
            </div>
         );
    }
}
 
export default ProductsPage;