import React, { Component } from 'react';
import {Link} from 'react-router-dom'


class Navbar extends Component {


    componentDidMount (){
        let MenuItems = document.getElementById("MenuItems");
        MenuItems.style.maxHeight = "0px";   
    }    

    menutoggle = () => {
        let MenuItems = document.getElementById("MenuItems");
        if (MenuItems.style.maxHeight == "0px") {
            MenuItems.style.maxHeight = "200px";
        }
        else {
            MenuItems.style.maxHeight = "0px";
        }
    }

    state = {  }

    render() { 
        return (
            <div className="header">
                <div className="container">
                    <div className="navbar">
                        <div className="logo">
                            <img src= "images/logo.png" width="125px" alt="NoImage"></img>
                        </div>
                        <nav>
                            <ul id="MenuItems">
                            <li><Link to="/" style={{color: "black"}}>Home</Link></li>
                                <li><Link to="/Product" style={{color: "black"}}>Products</Link></li>
                                <li><a href="#" style={{color: "black"}}>About</a></li>
                                <li><a href="#" style={{color: "black"}}>Contact</a></li>
                                <li><a href="#" style={{color: "black"}}>Account</a></li>
                            </ul>
    
                        </nav>
                        <Link to = "/Cart">
                        <i className="fa fa-shopping-cart" aria-hidden="true">{JSON.parse(localStorage.getItem('cartProd')).length}</i>
                        </Link>
    
                        <img src="images/menu.png" className="menu-icon" onClick={this.menutoggle} href="cart.html" />
                    </div>
                </div>
          
              </div>
            
        )
    }
}
 
export default Navbar;
