
import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export function Edit(props) {
// The useParams hook returns an object of key/value pairs of
// the dynamic params from the current URL that were matched by
//the <Route path>.
let { id } = useParams();

// update arrays using the React useState()
// and without the Array object's push() method
const [title, setTitle] = useState("");
const [cover, setCover] = useState("");
const [author, setAuthor] = useState("");

// useNavigate return a function that we can use to navigate
// navigate is used as a hook that will bring the user back to read.js when finished editing
const navigate = useNavigate();

//useEffect Hook is similar componentDidMount
//the use state Hook will allow us to edit the orginal data inputed from a user
useEffect(() => {

//axios is a promised based web client
//make a HTTP Request with GET method and pass as part of the
//url.
//go to this URL, server is listening for HTTP request
//it will get the book with the same ID

axios.get('http://localhost:4000/api/book/' + id)

//will send back response

.then((response) => {

    // Assign Response data to the arrays using useState.
    //Will update these arrays and puts a value into each of them
    setTitle(response.data.title);
    setCover(response.data.cover);
    setAuthor(response.data.author);
    })
    .catch(function (error) {
    console.log(error);
    })
    }, []);

    //the handle submit will display title, cover, author
    const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
    id: id,
    title: title,
    cover: cover,
    author: author
    };

    /* Will edit the book details */
    axios.put('http://localhost:4000/api/book/' + id, newBook)
    .then((res) => {
    console.log(res.data);
    //will navigate back to read.js when dinished editing
    navigate('/read');
    });

    }
    return (
    <div>      
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label>Edit Book Title: </label>
    <input type="text"
    className="form-control"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Edit Book Cover: </label>
    <input type="text"
    className="form-control"

        value={cover}
    onChange={(e) => setCover(e.target.value)}
    />
</div>
    <div className="form-group">
    <label>Edit Book Author: </label>
    <input type="text"
    className="form-control"
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
    />
    </div>
    <div className="form-group">
    <input type="submit" value="Edit Book" className="btn btn-primary"/></div>
    </form>
    </div>
);
}