import React, { Component } from 'react';
import Card from './components/Card'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Featured from './components/Featured'
import axios from 'axios';
import API from './config/api'
import Cart from './components/Cart';

//For cart temporary store items and when clicked on item get all the data and filter it 
//according to the id 

class App extends Component {
    state = {
        cartItems: 0,
        cartProd: [],
        products : []
    }

    componentDidMount(){
        try {
                API.get()
                .then(res => {
                    this.setState({products :res.data})
                })
                .then(e =>{
                    this.state.products.forEach(element => {
                        localStorage.setItem(`${element._id}`,0)
                        localStorage.setItem('cartProd',JSON.stringify([]))
                    });
                })
            }catch{
                console.log("Error")
            }
        
    }


    onAdd = (e,id) => {
       console.log("Claee",id,e)
        let arr = JSON.parse(localStorage.getItem('cartProd'))
        arr.push(id.toString())
        localStorage.setItem('cartProd',JSON.stringify(arr))
        console.log(arr)
        this.setState({cartProd:arr })
        console.log(this.state.cartProd)
        const len = this.state.cartProd.length
        this.setState({ cartItems:len})
    }

    onSub = (e,id) => {
        
        let array = JSON.parse(localStorage.getItem('cartProd'))
        const index = array.indexOf(id);
        if (index > -1) {
            array.splice(index, 1);
        }
        localStorage.setItem('cartProd',JSON.stringify(array))
        this.setState({cartProd:array})
        console.log(this.state.cartProd)

        const len = this.state.cartProd.length
        console.log(this.state.cartProd.length)
        this.setState({ cartItems:len})
    }

    render() {
            return (
            <>  
            <Header cartItem={this.state.cartItems}/>
            <Featured />
            <Card cartItem={this.state.cartItems} onAdd={this.onAdd}
                 onSub={this.onSub} products={this.state.products} 
                 cartProd = {this.state.cartProd}
                 />
            
            <Footer />
            </>
        );
    }
}

export default App;