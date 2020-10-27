import React, { Component } from 'react';
import axios from 'axios';
import API from '../config/api'

class GetData extends Component {
    state = { 
        data : []
     }

    componentDidMount(){
    
        const userObject = {
            name: 'AddData',
        };
        try {
            axios.post('http://localhost:5000/api/items',userObject)
            .then(console.log("added Item"))
        }catch{
            console.log("Error2")   

        // try {
        //     API.get()
        //     .then(res => {
        //         console.log("Got a response")
        //         console.log(res.data[0]._id)
        //         axios.delete(`http://localhost:5000/api/items/${res.data[0]._id}`)
        //         .then(res =>{
        //             console.log(res.data)
        //         })
        //         this.setState({})
        //     })
        // }catch{
        //     console.log("Error")
        // }
        //
        
    }
}
    render() { 
        return ( <div>
            {this.state.data}
            HH
        </div>);
    }
}
 
export default GetData;