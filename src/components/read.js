import React from "react";
import { Games } from "./games";
import axios from "axios";

export class Read extends React.Component{

    //constructor for reload method
    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this);
    }

    //will reload page when delete is used
    ReloadData(){

        axios.get('http://localhost:4000/api/games')

        //when response comes back it will update the state and return it to games
       .then((response)=>{
           this.setState({games:response.data})
       })
       ////if there an error console will show the error
       .catch((error)=>{
           console.log(error);
       })
    }
    
    //axios will make http request to the link
    componentDidMount() {
        axios.get('http://localhost:4000/api/games')

         //when response comes back it will update the state and return it to games
        .then((response)=>{
            this.setState({games:response.data})
        })
        ////if there an error console will show the error
        .catch((error)=>{
            console.log(error);
        })
    }

    //state has an array called games
    state = {
        games:[ ]
    }
    
    //render will return our display
    render(){
        return(
            <div>
                <h3>Welcome to the Hall of Fame for games!</h3>
                <p>Explore the games people belive deserve to be on this list and you may find a game that you
                    haven't played yet that you should try out.
                </p>
                <Games games={this.state.games} ReloadData={this.ReloadData}></Games>
            </div>
        );
    }
}