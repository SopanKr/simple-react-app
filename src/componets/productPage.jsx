import React, { Component } from 'react';
import ProductComponent from './productComponent';

class ProductsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="flex-container">
                {this.props.products.map(product => <ProductComponent key={product.id} product={product}/>)}
            </div>
         );
    }
}
 
export default ProductsPage;