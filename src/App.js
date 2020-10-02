import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import Navbar from './layout/navbar'
import HomePage from './pages/home/home.component'
import NoteEdit from './components/note-edit/note-edit.component'

function App() {
  return (    
    <Router>
      <Navbar />
      <Switch>        
        <Route exact path='/' component={HomePage} />        
        <Route path='/edit/:id' component={NoteEdit} />
      </Switch>
    </Router>
  );
}

export default App;
