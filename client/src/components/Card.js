import React, { Component } from 'react';

class Card extends Component {

    onAdd = (e) => {
       // console.log()
        
        this.props.onAdd(this.props.cartItem,e.target.id)
        const temp = localStorage.getItem(e.target.id)
        localStorage.setItem(e.target.id,parseInt(temp)+1)
    }

    onSub = (e) => {
        const temp = localStorage.getItem(e.target.id)
        localStorage.setItem(e.target.id,parseInt(temp)-1)
        this.props.onSub(this.props.cartItem,e.target.id)
        
    }

    render() {
        console.log("Called")
        const curretVal = (e) =>{
            if (localStorage.getItem(e.toString()) == 0) {
                const btn = <button value={localStorage.getItem(e.toString())} id={e.toString()} onClick={this.onAdd}>Add to Cart</button>
                return (btn)
            } else {
                const btn = <div>
                    <button id={e.toString()} value={localStorage.getItem(e.toString())} onClick={this.onSub}>-</button><span>
                        {localStorage.getItem(e.toString())}
                    </span><button value={localStorage.getItem(e.toString())} id={e.toString()} onClick={this.onAdd}>
                        +</button></div>
                return (btn)
            }
        }

        return(
            <div className="row">
                {this.props.products.map(element =>(
                   <div className="col-4" id={element._id}>
                   <img src="sss{element.imgSrc}" alt="No Image" />
                       <h4>{element.title}</h4>
                       <div className="rating">
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star"></i>
                           <i className="fa fa-star-o"></i>
                       </div>
                       <p>{element.price}</p>
                       {/* {this.props.number} */}
                       {curretVal(element._id)}
                   </div>
                )
                )}
            </div>
        )
    }
}

export default Card;

