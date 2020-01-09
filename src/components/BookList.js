import React, { Component } from 'react';
import { DarkMode } from '../context/DarkModeContext'

class BookList extends Component {
    static contextType = DarkMode;

    render() { 
        const {isLightMode, light, dark} = this.context;
        const theme = isLightMode ? light : dark ;
        return (  
            <div className ="book-list" style = {{ background:theme.bg, color : theme.syntax}}>
                <ul>
                    <li style ={{background:theme.ui}}>Titre de livre 1</li>
                    <li style ={{background:theme.ui}}>Titre de livre 2</li>
                    <li style ={{background:theme.ui}}>Titre de livre 3</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;