import React from 'react'
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const Nav = () => {
    return (
        <>

            <div class="wrapperz">
                <nav>
                    <input type="checkbox" id="show-search" />
                    <input type="checkbox" id="show-menu" />
                    <label for="show-menu" class="menu-icon"><MenuIcon /></label>
                    <div class="content">
                        <div class="logo"><img src = "logo.png" /></div>
                        <ul class="links">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Bollywood</a></li>
                            <li>
                                <a href="#" class="desktop-link">Hollywood</a>
                                <input type="checkbox" id="show-features" />
                                <label for="show-features">Hollywood</label>
                                <ul>
                                    <li><a href="#">Action Movies</a></li>
                                    <li><a href="#">Animated Movies</a></li>
                                    <li><a href="#">Adult Movies</a></li>
                                    <li><a href="#">Biographies</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#" class="desktop-link">Web Series</a>
                                <input type="checkbox" id="show-services" />
                                <label for="show-services">Web Series</label>
                                <ul>
                                    <li><a href="#">Comedy and Drama</a></li>
                                    <li><a href="#">Action</a></li>
                                    <li><a href="#">Animated</a></li>
                                    <li>
                                        <a href="#" class="desktop-link">Adult</a>
                                        <input type="checkbox" id="show-items" />
                                        <label for="show-items">Adult</label>
                                        <ul>
                                            <li><a href="#">Erotic</a></li>
                                            <li><a href="#">Romance</a></li>
                                            <li><a href="#">Fantasy</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><a href="#">Games</a></li>
                        </ul>
                    </div>
                    <label for="show-search" class="search-icon"><SearchIcon /></label>
                    <form action="#" class="search-box">
                        <input type="text" placeholder="Type Something to Search..." />
                        <a href = "" class="go-icon"><ArrowBackIcon className = "AddBackIcon"/></a>
                        
                    </form>
                </nav>
            </div>
           


        </>
    )
}
export default Nav;