import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import DarkModeContext from './context/DarkModeContext'
import DarkModeToggle from './components/DarkModeToggle';


const App = () => {
  return (
    <div className="App">
    <DarkModeContext>
      <Navbar/>
      <BookList/>
      <DarkModeToggle/>
    </DarkModeContext>
    </div>
  );
}

export default App;
