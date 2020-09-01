import React, { Component } from 'react';
import axios from 'axios';

class ProductDetail extends Component {
    componentDidMount () {
        axios.get(`http://localhost:3000/product/${this.props.id}`)
        .then(res =>  {
          this.setState({product: res.data});
        })
        .catch(json => console.log(json))
    }
    
    state = { 
        product: {

        }
     }
    render() { 
        
        return (  <React.Fragment>
<div className="container">

  <h1 className="my-4">{this.state.product.name}
  </h1>

  <div className="row">

    <div className="col-md-8">
    <img className="card-img-top" src={this.state.product.imageUrl} alt={this.state.product.name} />
    </div>

    <div className="col-md-4">
      <h3 className="my-3">Product Description</h3>
        <p>{this.state.product.description}</p>
      <h3 className="my-3">Price</h3>
        <p>Rs.{this.state.product.price}</p>
    </div>

  </div>

  <button onClick={() => this.props.onAddToCart(this.state.product)} className="btn btn-primary">Add To Cart</button>

</div>
        </React.Fragment>);
    }
}
 
export default ProductDetail;