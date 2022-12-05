import React from "react";
import { Books } from "./books";
import axios from "axios";

export class Read extends React.Component{

    //constructor for reload method
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    //will reload page when delete is used
    ReloadData(){

        axios.get('http://localhost:4000/api/books')

        //when response comes back it will update the state and return it to books
       .then((response)=>{
           this.setState({books:response.data})
       })
       ////if there an error console will show the error
       .catch((error)=>{
           console.log(error);
       })
    }
    
    //axios will make http request to the link
    componentDidMount() {
        axios.get('http://localhost:4000/api/books')

         //when response comes back it will update the state and return it to books
        .then((response)=>{
            this.setState({books:response.data})
        })
        ////if there an error console will show the error
        .catch((error)=>{
            console.log(error);
        })
    }

    //state has an array called books
    state = {
        books:[ ]
    }
    
    //render will return our display
    render(){
        return(
            <div>
                <h3>Hello from my Read component!</h3>
                <Books books={this.state.books} ReloadData={this.ReloadData}></Books>
            </div>
        );
    }
}