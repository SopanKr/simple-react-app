import React, { Component } from 'react';

class ProductComponent extends Component {
    render() { 
        return (
        <React.Fragment>
            <div className="card justify-content-center" style={{width: "18rem", margin: "1rem"}}>
                <img className="card-img-top" src={this.props.item.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{this.props.item.name}</h5>
                <p className="card-text">{this.props.item.imageUrl}</p>
                <a href="#" className="btn btn-primary stretched-link">Go somewhere</a>
            </div>
        </div>
      </React.Fragment>);
    }
}
 
export default ProductComponent;