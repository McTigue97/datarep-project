const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');

//cors = Cross-Origin Resource Sharing
//cors allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served
app.use(cors());
app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
res.header("Access-Control-Allow-Headers",
"Origin, X-Requested-With, Content-Type, Accept");
next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


//mongoose will connect to Mongo DB
// getting-started.js
const mongoose = require('mongoose');

main().catch(err => console.log(err));

//will connect to mongo db database I created
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.cbz3c00.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//defined the schema and what data will be stored | title, cover and author
const bookSchema = new mongoose.Schema({
  title: String,
  cover: String,
  author: String
});

//the model will convert the schema to a model
//model for the bookschema
const bookmodel = mongoose.model('books', bookSchema);



//listening at /name address on port 4000, will display "Hello World" to the screen
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//post method is sent to Port 4000 /api/books
app.post('/api/books',(req, res)=>{
    console.log(req.body);
  //will create record for title, cover and author and pull that data
    bookmodel.create({
      title:req.body.title,
      cover:req.body.cover,
      author:req.body.author
    })
    res.send('Book added');
})

//Listening for get method
app.get('/api/books', (req, res)=>{
  //  const books = [
        //{
        //"title": "Learn Git in a Month of Lunches",
       // "isbn": "1617292419",
       // "pageCount": 0,
        //"thumbnailUrl":
        //"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg", "authors": ["Rick Umali"],
        //"categories": []
        //},
       // {
        //"title": "MongoDB in Action, Second Edition",
        //"isbn": "1617291609",
       // "pageCount": 0,
       // "thumbnailUrl":
       // "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        //"status": "MEAP",
        //"authors": [
        //"Kyle Banker",
        //"Peter Bakkum",
        //"Tim Hawkins",
        //"Shaun Verch",
        //"Douglas Garrett"
        //],
        //"categories": []
   // },
   // {
    //"title": "Getting MEAN with Mongo, Express, Angular, and Node",
    //"isbn": "1617292036",
   // "pageCount": 0,
   // "thumbnailUrl":
    //"https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
    //"status": "MEAP",
    //"authors": ["Simon Holmes"],
   // "categories": []
   // }
    //];

    //finds the data like the get method
    bookmodel.find((err,data)=>{
      console.log(data);
      res.json(data);
    })

    // //Displays books array  
    // res.status(200).json({
    //     myBooks:books
    // })
    })

    //allows a serach for a specific book
    app.get('/api/book/:id',(req,res)=>{
      console.log(req.params.id);
      bookmodel.findById(req.params.id,(err,data)=>{
        res.json(data);
      });
    })

    //Will listen for API/book/:id that will generate a response
    //this url will have an id
    //req.parmas will pull the ID of the book out and update it
    app.put('/api/book/:id',(req,res)=>{
      console.log("Update"+req.params.id);

      //Call back function that will overide the record
      //it will take out the orginal data and replace it with the edited data
      //will send back some data
      bookmodel.findByIdAndUpdate(req.params.id,req.body,{new: true},(error, data)=>{
        res.send(data);
    })
    })

    //function for delete
    //find by ID and delete 
    //callback function executes when deleted and the data is sent back
    app.delete('/api/book/:id', (req,res)=>{
      console.log("Book has been Deleted!"+req.params.id);

      bookmodel.findByIdAndDelete(req.params.id, (error,data)=>{
        res.send(data);
      })
    })

//Listens for port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})