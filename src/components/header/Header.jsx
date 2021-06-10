import React, { Component } from 'react';
import './header.css'

class Header extends Component {

    homeTimes = 0;
    houseTimes = 0;
    casaTimes = 0;

    cliquedHome = (e) => {
        console.log(`${e.target.innerText} has been cliqued  ${this.homeTimes += 1} times`);
    } 
    cliquedHouse = (e) => {
        console.log(`${e.target.innerText} has been cliqued  ${this.houseTimes += 1} times`);
    } 
    cliquedCasa = (e) => {
        console.log(`${e.target.innerText} has been cliqued  ${this.casaTimes += 1} times`);
    } 

    render() {
        return (
            <div className='header_div'>
                <nav className="header_div_nav">
                    <ul>
                        <li onClick={this.cliquedHome}><a href="#">Home</a></li>
                        <li onClick={this.cliquedHouse}><a href="#">House</a></li>
                        <li onClick={this.cliquedCasa}><a href="#">Casa</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;