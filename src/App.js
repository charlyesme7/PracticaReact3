import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import List from './Components/List';
import Books from './Components/Books';
import LibraryProvider from './Components/LibraryContext';

function App() {
  return (
    <div className="App">
      <LibraryProvider>
          <Header/>
          <div className="Containers">
              <Books/>
              <List/>            
          </div> 
        </LibraryProvider>
    </div>
  );
}

export default App;
