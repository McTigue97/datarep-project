const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

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
  await mongoose.connect('mongodb+srv://admin:admin@mernapp.k5rbzn1.mongodb.net/?retryWrites=true&w=majority');
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

//defined the schema and what data will be stored | name, info, developer and year released
const gameSchema = new mongoose.Schema({
  name: String,
  cover: String,
  developer: String,
  yearreleased: String,
  rating: String
});

//the model will convert the schema to a model
//model for the game schema
const gamemodel = mongoose.model('games', gameSchema);



//listening at /name address on port 4000, will display "Hello World" to the screen
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//post method is sent to Port 4000 /api/games
app.post('/api/games',(req, res)=>{
    console.log(req.body);
 //will create record for name, cover, developer and year released and pull that data
    gamemodel.create({
      name:req.body.name,
      cover:req.body.cover,
      developer:req.body.developer,
      yearreleased:req.body.yearreleased,
      rating:req.body.rating
    })
    res.send('Game added');
})

//Listening for get method
app.get('/api/games', (req, res)=>{

    //finds the data like the get method
    gamemodel.find((err,data)=>{
      console.log(data);
      res.json(data);
    })

    // //Displays games array  
    // res.status(200).json({
    //     myGames:games
    // })
    })

    //allows a serach for a specific game
    app.get('/api/game/:id',(req,res)=>{
      console.log(req.params.id);
      gamemodel.findById(req.params.id,(err,data)=>{
        res.json(data);
      });
    })

    //Will listen for API/game/:id that will generate a response
    //this url will have an id
    //req.parmas will pull the ID of the game out and update it
    app.put('/api/game/:id',(req,res)=>{
      console.log("Update"+req.params.id);

      //Call back function that will overide the record
      //it will take out the orginal data and replace it with the edited data
      //will send back some data
      gamemodel.findByIdAndUpdate(req.params.id,req.body,{new: true},(error, data)=>{
        res.send(data);
    })
    })

    //function for delete
    //find by ID and delete 
    //callback function executes when deleted and the data is sent back
    app.delete('/api/game/:id', (req,res)=>{
      console.log("Game has been Deleted!"+req.params.id);

      gamemodel.findByIdAndDelete(req.params.id, (error,data)=>{
        res.send(data);
      })
    })

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
  });
  

//Listens for port
app.listen(port, () => {
  console.log(`GamePlace app listening on port ${port}`)
})