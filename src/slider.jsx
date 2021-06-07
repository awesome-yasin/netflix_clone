import Carousel from "react-elastic-carousel";
import './slider.css'
const Slider = () => {
   
   return (
      <>
         <div className="App">
            <Carousel enableSwipe={true} enableAutoPlay autoPlaySpeed={3000} className="slider">
               <div className="slide-1">
                  <div id="bg">
                     <img src="https://cdn.europosters.eu/image/750/posters/avengers-endgame-suits-i72292.jpg" alt=""></img>
                  </div>
                  <div>
                  <h5 className="nr1">New Release</h5>
                  <h1 className="nm1">Avenger's Endgame</h1>
                  </div>
                  <div className="info">
                     <div className="progress"><div class="progress-circle over50 p100">
                        <span>9.7</span>
                        <div class="left-half-clipper">
                           <div class="first50-bar"></div>
                           <div class="value-bar"></div>
                        </div>
                     </div></div><span className="imdb">Imdb</span><p>Score</p>
                     <p className="year">2020</p>
                     <p className="time">1hr 45 min</p>
                     <p className="genre"> War</p>
                  </div>
                  <div className="para-detail">
                     <p className="details">After Thanos, an intergalactic warlord, disintegrates half of the universe,
                     the Avengers must reunite and assemble again to reinvigorate their trounced allies and
                     restore balance.</p>
                  </div>

               </div>



               <div className="slide-1">
                  <div id="bg">
                     <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6166/6166913_so.jpg" alt=""></img>
                  </div>
                  <h5 className="nr1">New Release</h5>
                  <h1 className="nm1">Batman vs Superman</h1>

                  <div className="info">
                     <div className="progress"><div class="progress-circle over50 p100">
                        <span>7.7</span>
                        <div class="left-half-clipper">
                           <div class="first50-bar"></div>
                           <div class="value-bar"></div>
                        </div>
                     </div></div><span className="imdb">Imdb</span><p>Score</p>
                     <p className="year">2016</p>
                     <p className="time">2hr 55 min</p>
                     <p className="genre">Action/Adventure</p>
                  </div>

                  <p className="details">Bruce Wayne, a billionaire, believes that Superman is a threat to humanity after
      his battle in Metropolis. Thus, he decides to adopt his mantle of Batman and defeat him once and for all.</p>


               </div>


               <div className="slide-1">
                  <div id="bg">
                     <img src="https://images-na.ssl-images-amazon.com/images/I/91wc7yc2R8L._SL1500_.jpg" alt=""></img>
                  </div>
                  <h5 className="nr1">New Release</h5>
                  <h1 className="nm1">John Wick Chapter 3</h1>

                  <div className="info">
                     <div className="progress"><div class="progress-circle over50 p100">
                        <span>8.3</span>
                        <div class="left-half-clipper">
                           <div class="first50-bar"></div>
                           <div class="value-bar"></div>
                        </div>
                     </div></div><span className="imdb">Imdb</span><p>Score</p>
                     <p className="year">2019</p>
                     <p className="time">2hr 23 min</p>
                     <p className="genre">Action/Thriller</p>
                  </div>

                  <p className="details">John Wick is declared excommunicado and a hefty bounty is set on him after he murders an
      international crime lord. He sets out to seek help to save himself from ruthless hitmen and bounty hunters.</p>


               </div>

               <div className="slide-1">
                  <div id="bg">
                     <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSNPj2bgqy8zGbvRUZPOpXvF58dwGwGk_1-GX1P_m7yHnj-8Ebd" alt=""></img>
                  </div>
                  <h5 className="nr1">New Release</h5>
                  <h1 className="nm1">Godzilla vs Kong</h1>

                  <div className="info">
                     <div className="progress"><div class="progress-circle over50 p100">
                        <span>8.1</span>
                        <div class="left-half-clipper">
                           <div class="first50-bar"></div>
                           <div class="value-bar"></div>
                        </div>
                     </div></div><span className="imdb">Imdb</span><p>Score</p>
                     <p className="year">2021</p>
                     <p className="time">1hr 55 min</p>
                     <p className="genre">Action/Adventure</p>
                  </div>

                  <p className="details">Fearsome monsters Godzilla and King Kong square off in an epic battle for
      the ages, while humanity looks to wipe out both of the creatures and take back the planet once and for all.</p>


               </div>

               <div className="slide-1">
                  <div id="bg">
                     <img src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt=""></img>
                  </div>
                  <h5 className="nr1">New Release</h5>
                  <h1 className="nm1">Tenet</h1>

                  <div className="info">
                     <div className="progress"><div class="progress-circle over50 p100">
                        <span>7.5</span>
                        <div class="left-half-clipper">
                           <div class="first50-bar"></div>
                           <div class="value-bar"></div>
                        </div>
                     </div></div><span className="imdb">Imdb</span><p>Score</p>
                     <p className="year">2020</p>
                     <p className="time">2hr 30 min</p>
                     <p className="genre">Action/Thriler</p>
                  </div>

                  <p className="details">A secret agent is given a single word as his weapon and sent to prevent the onset of World
      War III. He must travel through time and bend the laws of nature in order to be successful in his mission.</p>


               </div>

               <div className="slide-1">
                  <div id="bg">
                     <img src="https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" alt=""></img>
                  </div>
                  <h5 className="nr1">New Release</h5>
                  <h1 className="nm1">Extraction</h1>

                  <div className="info">
                     <div className="progress"><div class="progress-circle over50 p100">
                        <span>7.7</span>
                        <div class="left-half-clipper">
                           <div class="first50-bar"></div>
                           <div class="value-bar"></div>
                        </div>
                     </div></div><span className="imdb">Imdb</span><p>Score</p>
                     <p className="year">2020</p>
                     <p className="time">1hr 55 min</p>
                     <p className="genre">Action/Thriller</p>
                  </div>

                  <p className="details">A black-market mercenary who
     has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord.</p>


               </div>
            </Carousel>
         </div>
      </>
   )
}
export default Slider