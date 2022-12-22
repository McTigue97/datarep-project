import React from "react";
import {GameItem} from './gameItem';

export class Games extends React.Component{
    render(){
        return this.props.games.map(
            (game)=>{
                //is changed to game_id for mongo db, reload data will be used when 
                return <GameItem game={game} key={game._id} ReloadData={this.props.ReloadData}></GameItem>
            }
        );
    }
}