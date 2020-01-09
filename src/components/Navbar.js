import React, { Component } from 'react';
// import MyThemeContext from '../context/MyThemeContext'
import { DarkMode } from '../context/DarkModeContext'

class Navbar extends Component {
    static contextType = DarkMode;
    render() { 
     
        const {isLightMode, light, dark} = this.context;
        const theme = isLightMode ? light : dark ;
        
        return ( 
            <nav style = {{ background:theme.ui, color : theme.syntax}}>
                <h1>Context App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
         );
    }
}
 
export default Navbar;
