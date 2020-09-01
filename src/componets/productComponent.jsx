import React, { Component } from 'react';

class ProductComponent extends Component {
    render() { 
        return (
        <React.Fragment>
            <div className="card justify-content-center" style={{width: "18rem", margin: "1rem"}}>
                <img className="card-img-top" src={this.props.product.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{this.props.product.name}</h5>
                <p className="card-text">Rs.{this.props.product.price}</p>
                <p className="card-text" style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{this.props.product.description}</p>
                <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
            </div>
        </div>
      </React.Fragment>);
    }
}
 
export default ProductComponent;