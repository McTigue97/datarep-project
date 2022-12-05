import React from "react";
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";



export class BookItem extends React.Component {

    //constructor for delete 
    constructor(){
        super();
        this.DeleteBook = this.DeleteBook.bind(this);
    }

    //delete method for delete button
    //axios is used to delete the book from api/book
    //reload will be called when book is deleted and will reload the page
    DeleteBook(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/book/'+this.props.book._id)
        .then(()=>{this.props.ReloadData()})
        .catch();
    }

    render() {
        return (
            <div>
                {/* <h4>{this.props.book.title}</h4>
        <img src={this.props.book.thumbnailUrl}></img>
                <h6>{this.props.book.authors[0]}</h6> */}

                <Card>
            <Card.Header>{this.props.book.title}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
        {/* appropriate changes made for mongo db */}
            <img src={this.props.book.cover}></img>
            <footer >
                {this.props.book.author}
                    </footer>
                        </blockquote>
                    </Card.Body>
                    {/* React rooter dom link that looks like a button */}
                    <Link to={"/edit/"+this.props.book._id} className="btn btn-primary">Edit</Link>
                    {/* Delete button imported from bootstrap */}
                    <Button variant="danger" onClick={(this.DeleteBook)}>Delete</Button>
                </Card>
            </div>
        );
    }
}