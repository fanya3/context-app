import React, { Component } from "react";
import { DarkMode } from "../context/DarkModeContext";

const NavbarConsumer = () => { 
    return (  
      <DarkMode.Consumer>
          
        {(context) => {

          const { isLightMode, light, dark } = context;
          const theme = isLightMode ? light : dark;

          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </DarkMode.Consumer>
    );  
}

// class NavbarConsumer extends Component {
//     static contextType = DarkMode;
//     render() {
//       return (
//         <DarkMode.Consumer>
//           {(context) => {
              
//             const { isLightMode, light, dark } = context;
//             const theme = isLightMode ? light : dark;
  
//             return (
//               <nav style={{ background: theme.ui, color: theme.syntax }}>
//                 <h1>Context App</h1>
//                 <ul>
//                   <li>Home</li>
//                   <li>About</li>
//                   <li>Contact</li>
//                 </ul>
//               </nav>
//             );
//           }}
//         </DarkMode.Consumer>
//       );
//     }
//   }

  
export default NavbarConsumer;
