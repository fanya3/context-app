import React from 'react';
import { DarkMode } from '../context/DarkModeContext'


class DarkModeToggle extends React.Component {

    static contextType = DarkMode;
   
    render() { 
        // const {toggleDarkMode} = this.context;
        return ( 
            <button onClick= {this.context.toggleDarkMode }>
                Toggle the Mode
            </button>
            //  <button onClick= { toggleDarkMode }>
            //  Toggle the Mode
            // </button>
         );
    }
}
 
export default DarkModeToggle;