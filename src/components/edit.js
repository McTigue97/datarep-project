
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
const [name, setName] = useState("");
const [cover, setCover] = useState("");
const [developer, setDeveloper] = useState("");
const [yearreleased, setYearreleased] = useState("");
const [rating, setRating] = useState("");

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
//it will get the game with the same ID

axios.get('http://localhost:4000/api/game/' + id)

//will send back response

.then((response) => {

    // Assign Response data to the arrays using useState.
    //Will update these arrays and puts a value into each of them
    setName(response.data.name);
    setCover(response.data.cover);
    setDeveloper(response.data.developer);
    setYearreleased(response.data.yearreleased);
    setRating(response.data.rating);
    })
    .catch(function (error) {
    console.log(error);
    })
    }, []);

    //the handle submit will display name, cover, developer and year released
    const handleSubmit = (event) => {
    event.preventDefault();
    const newGame = {
    id: id,
    name: name,
    cover: cover,
    developer: developer,
    yearreleased: yearreleased,
    rating: rating
    };

    /* Will edit the game details */
    axios.put('http://localhost:4000/api/game/' + id, newGame)
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
    <label>Edit Game Name: </label>
    <input type="text"
    className="form-control"
    value={name}
    onChange={(e) => setName(e.target.value)}
    />
    </div>
    <div className="form-group">
    <label>Edit Game Cover: </label>
    <input type="text"
    className="form-control"

        value={cover}
    onChange={(e) => setCover(e.target.value)}
    />
</div>
    <div className="form-group">
    <label>Edit Game Developer: </label>
    <input type="text"
    className="form-control"
    value={developer}
    onChange={(e) => setDeveloper(e.target.value)}
    />
    </div>

    <div className="form-group">
    <label>Edit Year Released: </label>
    <input type="text"
    className="form-control"
    value={yearreleased}
    onChange={(e) => setYearreleased(e.target.value)}
    />
    </div>

    <div className="form-group">
    <label>Edit Game Rating: </label>
    <input type="text"
    className="form-control"
    value={rating}
    onChange={(e) => setRating(e.target.value)}
    />
    </div>

    <div className="form-group">
    <input type="submit" value="Edit Game" className="btn btn-primary"/></div>
    </form>
    </div>
);
}