import React from "react";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";



export class GameItem extends React.Component {

    //constructor for delete 
    constructor(){
        super();
        this.DeleteGame = this.DeleteGame.bind(this);
    }

    //delete method for delete button
    //axios is used to delete the game from api/game
    //reload will be called when game is deleted and will reload the page
    DeleteGame(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/game/'+this.props.game._id)
        .then(()=>{this.props.ReloadData()})
        .catch();
    }

    render() {
        return (
            <div>
                <Card>
            <Card.Header>{this.props.game.name}</Card.Header>
                    <Card.Body>
       <blockquote className="blockquote mb-0">
        {/* appropriate changes made for mongo db */}
        <img src={this.props.game.cover}></img>
            <footer >
                {this.props.game.developer}
                    </footer>
                        </blockquote>
                    </Card.Body>
                    {/* React rooter dom link that looks like a button */}
                    <Link to={"/edit/"+this.props.game._id} className="btn btn-primary mb1 bg-green">Edit</Link>
                    {/* Delete button imported from bootstrap */}
                    <Button variant="danger" onClick={(this.DeleteGame)}>Delete</Button>
                </Card>
            </div>
        );
    }
}