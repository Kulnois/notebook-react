import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Navbar from './layout/navbar'
import HomePage from './pages/home/home.component'
import NoteEdit from './components/note-edit/note-edit.component'
import NoteDetail from './components/note-detail/note-detail.component'
import Favorites from './components/favorites/favorites.component'

function App() {
  return (    
    <Router>
      <Navbar />
      <Switch>        
        <Route exact path='/' component={HomePage} />        
        <Route path='/edit/:id' component={NoteEdit} />        
        <Route path='/note/:id' component={NoteDetail} />  
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </Router>
  );
}

export default App;
