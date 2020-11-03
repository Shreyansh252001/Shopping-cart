import React, { Component } from 'react';
import Navbar from './Navbar'

class Test extends Component {
    state = {  }

    menuToggle = () =>{

    }

    render() { 
        return ( 
            <div className="header">
                <Navbar />
                <div className="row" style={{paddingLeft:"10em"}}>
                    <div className="col-2">
                        <h1>
                            Give Your Workout<br /> A New Style!
                        </h1>
                        <p>
                            Success isn't always about greatness.It's About consistency.Consistent hard work gains
                            success.Greatness will come
                        </p>
                        <a href="" className="btn">Explore Now!!!</a>
                    </div>
                    <div className="col-2">
                        <img src="images/image1.png" alt="" />
                    </div>
                </div>
            </div>
    
         );
    }
}
 
export default Test;