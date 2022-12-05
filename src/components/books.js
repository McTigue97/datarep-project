import React from "react";
import {BookItem} from './bookItem';

export class Books extends React.Component{
    render(){
        return this.props.books.map(
            (book)=>{
                //is changed to book_id for mongo db, reload data will be used when 
                return <BookItem book={book} key={book._id} ReloadData={this.props.ReloadData}></BookItem>
            }
        );
    }
}