import React from 'react'
import { BrowserRouter as Router, Route, HashRouter } from 'react-router-dom'

import Navbar from './layout/navbar'
import HomePage from './pages/home/home.component'
import NoteEdit from './components/note-edit/note-edit.component'
import NoteDetail from './components/note-detail/note-detail.component'
import Favorites from './components/favorites/favorites.component'

function App() {
  return (    
    <Router>
      <HashRouter>        
        <Navbar />        
        <Route exact path='/' component={HomePage} />        
        <Route path='/edit/:id' component={NoteEdit} />        
        <Route path='/note/:id' component={NoteDetail} />  
        <Route path='/favorites' component={Favorites} />
      </HashRouter>
    </Router>
  );
}

export default App;
