import React, { createContext } from 'react';

export const DarkMode = createContext();


class DarkModeContext extends React.Component {

    state = {  
        isLightMode:true,
        light : { syntax:'#555', ui : '#ddd', bg:'#eee'},
        dark : { syntax:'#ddd', ui : '#333', bg:'#555'}
    }

     toggleDarkMode = () => {
        this.setState ({isLightMode : !this.state.isLightMode})
     }

    render() { 
        return ( 
            <DarkMode.Provider value={{...this.state, toggleDarkMode :this.toggleDarkMode }}>
                {this.props.children}
            </DarkMode.Provider>
         );
    }
}
 
export default DarkModeContext;