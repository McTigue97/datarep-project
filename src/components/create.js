import React from "react";
import axios from "axios";

export class Create extends React.Component {

     //constructor that will bind the methods
    constructor(){
        super();
        //binding to events
        this.handleSubmit = this.handleSubmit.bind(this);
        //binding for book title
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        //binding for book cover
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        //binding for book author
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);
        //when form loads empty strings will be there
        this.state = {
            title:'',
            cover:'',
            author:''
        }
    }

    //2 methods that will be invoked
    //will take an event as an argument 
    handleSubmit(e){
        e.preventDefault(); //cancels the event
        //will display message in console
        console.log(`Button clicked 
        ${this.state.title},
        ${this.state.cover},
        ${this.state.author}`);

        //creates a const for each of the following, title, cover, author
        const book = {
            title:this.state.title,
            cover:this.state.cover,
            author:this.state.author
        }
        //axios has the ability to make HTTP requests from the browser and handle the transformation of request and response data
        //axios uses port 4000/api/books to handle the request and response of data    
        axios.post('http://localhost:4000/api/books',book)
        .then()
        .catch();

        //will reset the states to 0
        this.setState({
            title:'',
            cover:'',
            author:''
        })
    }

    //title is a variable 
    onChangeBookTitle(e){ // When the value inside the field changes it will update the state
        this.setState({
            title:e.target.value
        })
    }
    //method for book cover
    onChangeBookCover(e){ // When the value inside the field changes it will update the state
        this.setState({
            cover:e.target.value
        })
    }
    //method for book author
    onChangeBookAuthor(e){ // When the value inside the field changes it will update the state
        this.setState({
            author:e.target.value
        })
    }

    //render will return our display
    render() {
        return (
            <div>
                <h3>Hello from Create Component!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>

                    <input type="submit" value="Add Book" />
                </form>
            </div>
        );
    }
}