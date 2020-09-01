import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductComponent extends Component {
    render() { 
        return (
        <React.Fragment>
            <div className="card justify-content-center" style={{width: "18rem", margin: "1rem"}}>
                <img className="card-img-top" src={this.props.product.imageUrl} alt={this.props.product.name} />
            <div className="card-body">
                <h5 className="card-title">{this.props.product.name}</h5>
                <p className="card-text">Rs.{this.props.product.price}</p>
                <p className="card-text" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{this.props.product.description}</p>
                <Link  className="btn btn-primary stretched-link" to={`/product/${this.props.product.id}`}>
                    <span>View Product</span>
                 </Link>
            </div>
        </div>
      </React.Fragment>);
    }
}
 
export default ProductComponent;