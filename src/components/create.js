import React from "react";
import axios from "axios";

export class Create extends React.Component {

     //constructor that will bind the methods
    constructor(){
        super();
        //binding to events
        this.handleSubmit = this.handleSubmit.bind(this);
        //binding for game name
        this.onChangeGameName = this.onChangeGameName.bind(this);
        //binding for game info
        this.onChangeGameCover = this.onChangeGameCover.bind(this);
        //binding for Game Developer
        this.onChangeGameDeveloper = this.onChangeGameDeveloper.bind(this);
        //binding for Game Year Released
        this.onChangeGameYearreleased = this.onChangeGameYearreleased.bind(this);
        //binding for Game Rating
        this.onChangeGameRating = this.onChangeGameRating.bind(this);
        //when form loads empty strings will be there
        this.state = {
            name:'',
            cover:'',
            developer:'',
            yearreleased: '',
            rating: ''
        }
    }

    //2 methods that will be invoked
    //will take an event as an argument 
    handleSubmit(e){
        e.preventDefault(); //cancels the event
        //will display message in console
        console.log(`Button clicked 
        ${this.state.name},
        ${this.state.cover},
        ${this.state.developer},
        ${this.state.yearreleased},
        ${this.state.rating}`);

        //creates a const for each of the following, name, info, developer, year released, rating
        const game = {
            name:this.state.name,
            cover:this.state.cover,
            developer:this.state.developer,
            yearreleased:this.state.yearreleased,
            rating:this.state.rating
        }
        //axios has the ability to make HTTP requests from the browser and handle the transformation of request and response data
        //axios uses port 4000/api/games to handle the request and response of data    
        axios.post('http://localhost:4000/api/games',game)
        .then()
        .catch();

        //will reset the states to 0
        this.setState({
            name:'',
            cover:'',
            developer:'',
            yearreleased:'',
            rating: ''
        })
    }

    //name is a variable 
    onChangeGameName(e){ // When the value inside the field changes it will update the state
        this.setState({
            name:e.target.value
        })
    }
    //method for game info
    onChangeGameCover(e){ // When the value inside the field changes it will update the state
        this.setState({
            cover:e.target.value
        })
    }
    //method for game developer
    onChangeGameDeveloper(e){ // When the value inside the field changes it will update the state
        this.setState({
            developer:e.target.value
        })
    }

    //method for year released
        onChangeGameYearreleased(e){ // When the value inside the field changes it will update the state
            this.setState({
                yearreleased:e.target.value
            })
        }

    //method for rating
         onChangeGameRating(e){ // When the value inside the field changes it will update the state
            this.setState({
            rating:e.target.value
                })
            }

    //render will return our display
    render() {
        return (
            <div>
                <h3>Hello from Game Place!</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Add Game Name: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeGameName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Game Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeGameCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Developer: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.developer}
                            onChange={this.onChangeGameDeveloper}
                        />
                    </div>

                    
                    <div className="form-group">
                        <label>Add Year Released: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.yearreleased}
                            onChange={this.onChangeGameYearreleased}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add your rating out of 10: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.rating}
                            onChange={this.onChangeGameRating}
                        />
                    </div>

                    <input type="submit" value="Add Game" />
                </form>
            </div>
        );
    }
}