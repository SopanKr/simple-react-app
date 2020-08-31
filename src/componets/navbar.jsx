import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() { 
        return ( <nav className="navbar navbar-light bg-light">
        <Link className="navbar-brand" to="/"> Navbar <span className="badge badge-pill badge-secondary">{this.props.totlaCounters}</span></Link>
        <Link to="/cart">
          <span>Cart</span>
        </Link>
      </nav> );
    }
}
 
export default NavBar;