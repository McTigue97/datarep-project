import {useState} from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Functional(){

    const [name, setName] = useState('');
    const [cover, setCover] = useState('');
    const [developer, setDeveloper] = useState('');
    const [yearreleased, setYearreleased] = useState('');
    const [rating, setRating] = useState('');
    
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:4000/api/games/ggggjggjgj') //needs proper id not ggggjggjgj
        .then((res)=>{
            setName(res.data.name);
            setCover(res.data.cover);
            setDeveloper(res.data.developer);
            setYearreleased(res.data.yearreleased);
            setRating(res.data.rating);
        })
        .catch();
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newGame = {
            name:name,
            cover:cover,
            developer:developer,
            yearreleased: yearreleased,
            rating: rating

        }

        axios.post('http://localhost:4000/api/games',newGame)
        .then((res)=>{
            console.log(res);
            navigate('/read');
        })
        .catch();


    };

    return(
        <div>
            <h1>Hello From Functional.js</h1>
            <form onSubmit={(handleSubmit)}>
                <div>
                    <label>Add Game Name</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e)=>(setName(e.target.value))}>
                    </input>
                </div>
                
                <div>
                    <label>Add Game Cover</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={cover}
                    onChange={(e)=>(setCover(e.target.value))}>
                    </input>
                    </div>

                <div>
                    <label>Add Developer</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={developer}
                    onChange={(e)=>(setDeveloper(e.target.value))}>
                    </input>
                </div>

                <div>
                    <label>Add Year Released</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={yearreleased}
                    onChange={(e)=>(setYearreleased(e.target.value))}>
                    </input>
                </div>

                <div>
                    <label>Add Game Rating</label>
                    <input 
                    type="text"
                    className="form-control"
                    value={rating}
                    onChange={(e)=>(setRating(e.target.value))}>
                    </input>
                </div>

            <input type="submit" value="Add Game"></input>
            </form>
        </div>
    );
}