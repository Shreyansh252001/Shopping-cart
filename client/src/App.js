import React, { Component } from 'react';
import Card from './components/Card'
import Navbar from './components/AppNavbar'
import GetData from './components/GetData'


class App extends Component {
    state = {
        cartItems: 0,

    }

    onAdd = (e) => {
        this.setState({ cartItems: parseInt(e) + 1 })
        console.log("hereParenbt", this.state.cartItems, e)
    }

    onSub = (e) => {
        this.setState({ cartItems: e - 1 })
    }

    render() {

        return (
            <>
            <Navbar cartItem={this.state.cartItems}/>
            <Card cartItem={this.state.cartItems} onAdd={this.onAdd} onSub={this.onSub} />
            <GetData />
            </>
        );
    }
}

export default App;