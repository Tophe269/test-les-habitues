import React from 'react'
import '../../App.css'
import Loader from '../loader/Loader'
import ListCtn from '../list/ListCtn';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Loader/>
      </header>
      <ListCtn />
    </div>
  );
}

export default App
