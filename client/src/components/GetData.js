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
        
        // try {
        //     axios.post('http://localhost:5000/api/items',userObject)
        //     .then(
        //             console.log("added Item")
        //             //this.setState({data:res.data[0]})
        //          )
            
        // }catch{
        //     console.log("Error2")   

        
            try {
                API.get()
                .then(res => {
                    console.log("Got a response")
                    console.log(res.data[0]._id)
                    // axios.delete(`http://localhost:5000/api/items/${res.data[0]._id}`)
                    // .then(res =>{
                    //     console.log(res.data)
                    // })
                   this.setState({data :res.data})
                })
            }catch{
                console.log("Error")
            }
        
    }

    onClick = (e) =>{
        const del = e.currentTarget.parentNode.id
        console.log(e.currentTarget.parentNode.id)
        axios.delete(`http://localhost:5000/api/items/${del}`)
                    .then(res =>{
                        console.log(res.data)
                    })
        const chg = this.state.data.filter(e =>(
            e._id !== del
        ))
        this.setState({
            data : chg
        })
    }
    render() { 
        if(this.state.data){
            return (
                <ul>
                   {this.state.data.map(e => (
                       <div key={e._id} id={e._id}  >
                           <button onClick={this.onClick}>Del</button>
                       </div>
                   ))}
                </ul>
            )
            return <> Hello</>
        }
        return ( <div>
            {this.state.data}
            HH
        </div>);
    }
}
 
export default GetData;