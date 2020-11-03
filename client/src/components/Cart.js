import React, { Component } from 'react';
import Navbar from './Navbar'
import axios from 'axios'
import API from '../config/api'

class Cart extends Component {
    state = {  }

    componentDidMount () {
       
        // axios.get(`http://localhost:5000/api/items/${res.data[0]._id}`)
                    // .then(res =>{
                    //     console.log(res.data)
                    // })
    }

    getData = () =>{
        const products = JSON.parse(localStorage.getItem('cartProd'))
        var distances = {},e;
        for (var i = 0,l=products.length; i < l; i++) { 
            e = products[i];
            distances[e] = (distances[e] || 0) + 1;
        }
        const data = []
        const keys = Object.keys(distances)
        axios.get(`http://localhost:5000/api/items/${keys[0]}`)
        .then (res =>{
            console.log(res.data)
        })
        console.log(products,"Here",keys[0])
        return ( <h1>h</h1>
            )
    }
    render() { 
        
        return (
            <>
            <Navbar />
            {/* {this.getData()} */}
            <h3>Cart displayed here</h3>
            </>
            );
    }
}
 
export default Cart;
