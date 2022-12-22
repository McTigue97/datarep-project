import React from "react";

// Imported Component from ReactPlayer
import ReactPlayer from "react-player";
// Imported Component from React Bootstrap
import { Carousel, Card } from "react-bootstrap";

import cardgroup from "react-bootstrap/CardGroup";

export class Content extends React.Component {
    render() {
        return (
            <center>
            <div class="title">
                <h1>Welcome to Game Place</h1>
                <h2>The time is {new Date().toLocaleTimeString()}.</h2>
            </div>

        <div>
          <img
          alt=""
          src="https://i.pinimg.com/736x/df/f6/d4/dff6d442417ed55d59d78ffcb9234c0a.jpg"
          width="800"
          height="500"
                /><h1>{"Game Place "}
                </h1>
          <h2>
          Are you a big fan of video games? Then this app is for you, add your favourite game to the ever growning
          list and give your rating of the game and other relevant details.
          </h2>
        </div>
        <div class="carobg">
          <Carousel style={{ width: "55%"}}>
            <Carousel.Item interval={10000} >
              <img
                className="d-block w-100"
                src="https://blog.turtlebeach.com/wp-content/uploads/2022/06/Red-Dead-Redemption-Artwork.jpeg"
                alt="First slide"
              />
              <Carousel.Caption>
              
              <h3>Some Classic Games you may have heard about</h3>
              <p>Red Dead Redemption</p>
               
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/whRlo118HMY/maxresdefault.jpg"
                alt="Second slide"
              />
              <Carousel.Caption>
             
              <h3>Who could forget about</h3>
                  <p>
                  Tony Hawk's Pro Skater 3
                  </p>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
              <img
                className="d-block w-100"
                src="https://image.api.playstation.com/vulcan/ap/rnd/202009/2820/h12URI7MdswtFPFHpkppNh2z.png"
                alt="Third slide"
              />
              <Carousel.Caption>
          
               <h3>And of course</h3>
                  <p>
                  The Elder Scrolls V: Skyrim
                  </p>
               
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <br></br>
        <div class="intro">
        <h1>What this app can do for you</h1>
          <h3>
            In this app you can view all of the games that people believe need to be on this list and edit their
            names, year the game was released add an image of the game. You can also add the developer of the game
            and the game rsating out of 10 you think it deserves. You can also delete old games and replace them with
            new ones as well.
          </h3>
        
        <br></br>
        <ReactPlayer 
        url="https://youtu.be/_i21MfpBruc" 
        controls={true}
        width="85%"
    /><br></br>
   </div>
  
        <br></br>
        <div class="intro">
          <h1>Gaming Facts</h1>
          <cardgroup>
            <Card border="danger" >
              <Card.Img variant="top" src="https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/t/the-legend-of-zelda-breath-of-the-wild-switch/hero.jpg" />
              <Card.Body>
                <Card.Title>The Number 1 Ranked Game of All Time</Card.Title>
                <Card.Text>
                According to IGN the number 1 game of all time is: The Legend of Zelda: Breath of the Wild.
                  "The Legend of Zelda: Breath of the Wild eschewed the semi-linear, borderline predictable path 
                  of the 3D Zelda games before it in favor of a bold, crazy new approach: let players do what they want, 
                  how they want, and in whatever order they decide. By marrying an open-ended approach 
                  to quest structure with the ability to freely explore a vast, beautiful, 
                  intriguing world with little specific regulation, the 3D Zelda game template was shattered about as 
                  fast as the average breakable weapon in Breath of the Wild. The result is a gorgeous, 
                  freeing open-world action/adventure experience that evokes the wonder and fear of exploring a 
                  bold new place with the empowering tangibility of becoming its hero". - Brian Altano
                  Do you agree with IGN's number 1 pick?
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="p-3" border="danger">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                "I'm Commander Shepard, and this is my favorite store on the Citadel!."
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                  Mass Effect 2
                    <cite title="Source Title"></cite>
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-right" border="danger">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                "War…war never changes"
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Fallout
                
                  </small>
                </footer>
              </blockquote>
            </Card>

            <Card className="text-right" border="danger">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                "Nothing is true, everything is permitted."
                </p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                    Assassins Creed
                
                  </small>
                </footer>
              </blockquote>
            </Card>

            <Card border="danger" >
            <Card.Img variant="top" src="https://akm-img-a-in.tosshub.com/sites/itgaming/resources/202211/the-witcher-3-wild-hunt151122015926.jpeg" />
              <Card.Body>
                <Card.Title>The Best Game I ever played</Card.Title>
                <Card.Text>
                I have played many games over the years, the best game I ever played would be between The Witcher 3: Wild Hunt 
                And Skyrim. They are very immersive games and I enjoyed the story in both games and can't pick between them. 
                </Card.Text>
              </Card.Body>
            </Card>
            <Card bg="danger" text="white" className="text-center p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>
                "Hatred and prejudice will never be eradicated. And the witch hunts will never be about witches.
                 To have a scapegoat — that's the key." "Kings die, realms fall, but magic endures."
                </p>
                <footer className="blockquote-footer" text="white">
                  <small className="text-white">
                    The Witcher 3: Wild Hunt
                    
                    
                  </small>
                </footer>
              </blockquote>
            </Card>
            <Card className="text-center" border="danger" >
           
            <Card.Img src="https://cdn.pocket-lint.com/r/s/970x/assets/images/148315-games-vs-xbox-series-x-vs-ps5-image1-z35tjyic4h.jpg" />
           
           <Card.Body>
             <Card.Title>Best gaming console?</Card.Title>
             <Card.Text>
             I played on both an Xbox and a PlayStation, if I had to pick between one I would have to go with PlayStation.
             I believe PlayStation just offer more of a gaming experience and is worth the money to spend on a new console.
             </Card.Text>
  
              </Card.Body>
            </Card>
        
            <Card border="danger" >
            <Card.Img variant="top" src="https://www.collegiate-ac.com/propeller/uploads/sites/2/2017/06/jeshoots-com-eCktzGjC-iU-unsplash-scaled.jpg" />
              <Card.Body>
                <Card.Title>Why playing video games is good for you</Card.Title>
                <Card.Text>
                1.Improved cognitive functions <br></br>
                2.Problem-solving skills and the use of logic <br></br>
                3.Hand-to-eye coordination <br></br>
                4.Faster and more accurate decision-making <br></br>
                5.Improved eye for details <br></br>
                6.Social activity and teamwork 
                </Card.Text>
              </Card.Body>
            </Card>
          </cardgroup>
      
        <br></br>
        </div>
        <br></br>
      </center>
        );
    }
}