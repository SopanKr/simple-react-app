import React, { Component } from 'react';
import ProductComponent from './productComponent';
import ReactPaginate from 'react-paginate';
import axios from 'axios';

class ProductsPage extends Component {
    state = { 
        products: [],
        currentPage: 0,
        pageCount: 1
     }

    componentDidMount(){
        this.reciveData(1);
      }

    render() { 
        return ( 
           <React.Fragment>
            <div className="flex-container">
                {this.state.products.map(product => <ProductComponent key={product.id} product={product}/>)}
            </div>
            <div>
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={this.state.pageCount}
                marginPagesDisplayed={5}
                pageRangeDisplayed={2}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}/>
        </div>
        </React.Fragment>
         );
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        this.reciveData(e.selected+1);
        this.setState({
            currentPage: selectedPage
        });
    };

    reciveData = pageNumber => {
        axios.post('http://localhost:3000/product/list', {page: pageNumber, filter: {}})
        .then(res =>  {
          this.setState({products: res.data.list, pageCount: Math.ceil((res.data.count+1)/10)});
        })
        .catch(json => console.log(json))
    }
}
 
export default ProductsPage;