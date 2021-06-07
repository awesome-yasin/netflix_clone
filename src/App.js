import './App.css';
import Nav from './navbar'
import Slider from './slider'
import React from "react";
import Page from './paginate.jsx';
import Products from './hit'
import Footer from './footer'
import Slide1 from './slider1'
import Slide2 from './slider2'
import Slide3 from './slider3'
import Slide4 from './slider4'
import Slide5 from './slide5'
function App() {
 
  return (
   <>
   
      
      <Nav />
      <Slider />
      <h2 className = "j1"><strong>All Time Hits</strong></h2>
      <div className = "yasin">
     
      <Products />
      </div>
      <h2 className = "j1"><strong>Trending Now</strong></h2>
      <div className = "yasin">
     
      <Slide1 />
      </div>
      <h2 className = "j1"><strong>New Releases</strong></h2>
      <div className = "yasin">
     
      <Slide2 />
      </div>
      <h2 className = "j1"><strong>Web Series</strong></h2>
      <div className = "yasin">
     
      <Slide3 />
      </div>
      <h2 className = "j1"><strong>Coming Soon</strong></h2>
      <div className = "yasin">
     
      <Slide4 />
      </div>
      <h2 className = "j1"><strong>Popular Games</strong></h2>
      <div className = "yasin">
     
      <Slide5 />
      </div>
      <div className = "yasin2">
      <h2 className = "j1"><strong>Latest Updates</strong></h2>
     <Page />
    </div>
   <Footer />
   </>
  );
}

export default App;
