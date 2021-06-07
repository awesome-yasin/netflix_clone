import React from 'react'
import './App.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
const Footer = () =>{
    return(
        <>
     
     <footer>
    <div class="content">
      <div class="top">
        <div class="logo-details">
          <i class="fab fa-slack"></i>
          <span class="logo_name"><img src = "logo.png"></img></span>
        </div>
        <div class="media-icons">
          <a href="https://www.facebook.com/mdyasin.ansari.1029/"><div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: '6px 6px'}}><FacebookIcon /> </div> </a>
          <a href="twitter.com"><div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: '6px 8px'}}><TwitterIcon /> </div></a>
          <a href="https://www.instagram.com/awesome_yasin/"><div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: '6px 6px'}}> <InstagramIcon /></div></a>
          <a href="https://github.com/yasin-ai"><div style={{ display: 'flex',alignItems: 'center', flexWrap: 'wrap', margin: '6px 6px'}}> <GitHubIcon /></div></a>
          <a href="youtube.com"><div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', margin: '6px 6px'}}><YouTubeIcon /></div></a>
        </div>
      </div>
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">Blockbuster</li>
          <li><a href="#">Home</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">My Profile</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Browse</li>
          <li><a href="#">Hollywood Movies</a></li>
          <li><a href="#">Web Series</a></li>
          <li><a href="#">TV Series</a></li>
          <li><a href="#">Animated Movies</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Games</li>
          <li><a href="#">Popular Games</a></li>
          <li><a href="#">Open World</a></li>
          <li><a href="#">Action and adventure</a></li>
          <li><a href="#">Sports</a></li>
        </ul>
        <ul class="box">
          <li class="link_name">Hindi</li>
          <li><a href="#">Bollywood Movies</a></li>
          <li><a href="#">South Indian Movies</a></li>
          <li><a href="#">Adult</a></li>
          <li><a href="#">Web Series</a></li>
        </ul>
        <ul class="box input-box">
          <li class="link_name">Subscribe</li>
          <li><input type="text" placeholder="Enter your email" /></li>
          <li><input type="button" value="Subscribe" /></li>
        </ul>
      </div>
    </div>
    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright &#169; 2021 <a href="#">Blockbuster.</a>All rights reserved</span>
        <span class="policy_terms">
          <a href="#">Privacy policy</a>
          <a href="#">Terms & condition</a>
        </span>
      </div>
    </div>
  </footer>

        </>
    )
}

export default Footer