import React, { Component } from 'react';


class Card extends Component {

    onAdd = (e) => {
        this.props.onAdd(e.target.value)
    }

    onSub = (e) => {
        this.props.onSub(e.target.value)
    }

    render() {
        if (this.props.cartItem === 0) {
            const btn = <button value={this.props.cartItem} onClick={this.onAdd}>Add to Cart</button>
            return (btn)
        } else {
            const btn = <div>
                <button value={this.props.cartItem} onClick={this.onSub}>-</button><span>
                    {this.props.cartItem}
                </span><button value={this.props.cartItem} onClick={this.onAdd}>
                    +</button></div>
            return (btn)
        }
    }
}

export default Card;

